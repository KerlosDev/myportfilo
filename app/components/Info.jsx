'use client'
import React, { useEffect, useState } from 'react'
import Globapi from '../api/Globapi'

const Info = () => {
  const [userEnrolls, setUserEnrolls] = useState([]) // جميع البيانات
  const [displayedEnrolls, setDisplayedEnrolls] = useState([]) // البيانات المعروضة في الصفحة الحالية
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [activeEmail, setActiveEmail] = useState(null)
  const itemsPerPage = 10 // عدد العناصر في الصفحة

  useEffect(() => {
    emails()
  }, [])

  useEffect(() => {
    // عندما تتغير الصفحة، نقوم بتقسيم البيانات على حسب الصفحة الحالية
    paginateEnrolls()
  }, [currentPage, userEnrolls])

  const emails = () => {
    Globapi.emails().then((res) => {
      console.log(res) // تأكد من أن الأوبجكت يستقبل البيانات بشكل صحيح
      setUserEnrolls(res.userEnrolls.reverse()) // تخزين البيانات كاملة وعكس ترتيبها
      setTotalPages(Math.ceil(res.userEnrolls.length / itemsPerPage)) // حساب إجمالي الصفحات
    }).catch((error) => {
      console.error('Error fetching data:', error)
    })
  }

  const paginateEnrolls = () => {
    // حساب بداية ونهاية العناصر بناءً على الصفحة الحالية
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    setDisplayedEnrolls(userEnrolls.slice(startIndex, endIndex)) // البيانات المعروضة في الصفحة
  }

  const handleEmailClick = (email, index) => {
    navigator.clipboard.writeText(email)
    setActiveEmail(index)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${year} / ${month} / ${day}`
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="p-6 bg-admin-imag bg-cover m-5 rounded-lg shadow-md">
      <h1 className="font-bold mb-4 text-white text-5xl">User Enrollments</h1>
      {displayedEnrolls.length > 0 ? (
        <ul className="grid grid-cols-4">
          {displayedEnrolls.map((enroll, index) => {
            const isRecent = new Date(enroll.updatedAt) > new Date(Date.now() - 24 * 60 * 60 * 1000)
            return (
              <li
                key={index}
                className={`p-4 m-1 ${isRecent ? 'bg-green-500 border-green-600 border-4 text-white/90 text-xl ' : 'bg-white text-gray-600 border-gray-200'} border font-anton rounded-lg`}
              >
                <p><span className="font-anton text-xl text-black">Email:</span> {enroll.userEmail}</p>
                <p><span className="font-anton text-xl text-black">Phone Number:</span> {enroll.phonenumber}</p>
                <p><span className="font-anton text-xl text-black">Time :</span> {formatDate(enroll.updatedAt)}</p>
                <button
                  onClick={() => {
                    handleEmailClick(enroll.userEmail, index)
                    alert('Email copied to clipboard')
                  }}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Copy Email
                </button>
              </li>
            )
          })}
        </ul>
      ) : (
        <p className="text-gray-500">No enrollments found.</p>
      )}

      {/* Controls for page navigation */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg mx-2 hover:bg-blue-700 transition duration-300"
        >
          Prev
        </button>
        <span className="px-4 py-2 text-lg text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg mx-2 hover:bg-blue-700 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Info

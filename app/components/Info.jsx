'use client'
import React, { useEffect, useState } from 'react'
import Globapi from '../api/Globapi'

const Info = () => {
  const [userEnrolls, setUserEnrolls] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [activeEmail, setActiveEmail] = useState(null)

  useEffect(() => {
    emails()
  }, [currentPage])

  const emails = () => {
    Globapi.emails(currentPage).then((res) => {
      setUserEnrolls(res.userEnrolls)
      setTotalPages(res.totalPages)
    })
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleEmailClick = (email, index) => {
    navigator.clipboard.writeText(email)
    setActiveEmail(index)
  }

  return (
    <div className="p-6 bg-admin-imag bg-cover m-5 rounded-lg shadow-md">
      <h1 className=" font-bold mb-4 text-white text-5xl ">User Enrollments</h1>
      {userEnrolls.length > 0 ? (
        <ul className="space-y-4">
          {userEnrolls.map((enroll, index) => (
            <li key={index} className="p-4 bg-white border border-gray-200 rounded-lg">
              <p><strong>Email:</strong> {enroll.userEmail}</p>
              <p><strong>Phone Number:</strong> {enroll.phonenumber}</p>
              <p><strong>Paid:</strong> {enroll.isHePaid ? 'Yes' : 'No'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No enrollments found.</p>
      )}
-
      <div className="grid gap-5 p-5 backdrop-filter rtl-grid max-sm:grid-cols-1 grid-cols-5">
        {/* Number of Students */}
        <div className="border-4 rounded-xl h-fit mx-auto m-4">
          <h3 className="p-2 text-center font-arabicUI3 leading-normal max-sm:text-2xl  text-5xl text-white">
            عدد الطلاب المشتركين فكورسات
          </h3>
          <h3 className="p-2 text-center font-arabicUI3 flex justify-between text-6xl text-blue-950 bg-white m-4 rounded-xl">
            <span className="m-auto">{userEnrolls.length}</span><span>طالب</span>
          </h3>
        </div>
        <div className="border-4 rounded-xl col-span-2 m-4">
          <h3 className="p-2 text-center font-arabicUI3 leading-normal max-sm:text-2xl text-5xl text-white">
            ايميلات الطلاب المشتركين فكورسات
          </h3>
          {userEnrolls.map((item, index) => (
            <h3
              key={index}
              className={`${activeEmail === index
                ? 'bg-green-500 text-white'
                : 'text-blue-950 bg-white'
                } cursor-pointer duration-300 max-sm:text-sm text-right p-2 transition justify-end font-arabicUI3 flex text-4xl m-4 rounded-xl`}
              onClick={() => handleEmailClick(item.userEmail, index)}
            >
              <span className="m-auto">{item.userEmail}</span>
            </h3>
          ))}
          <div className="flex justify-center mt-5">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-5 py-2 bg-blue-500 max-sm:text-lg max-sm:p-2  text-white rounded-2xl font-arabicUI3 text-4xl m-2 disabled:opacity-50"
            >
              السابق
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-5 py-2 bg-blue-500 max-sm:text-lg max-sm:p-2 text-white rounded-2xl font-arabicUI3 text-4xl m-2 disabled:opacity-50"
            >
              التالي
            </button>
          </div>
        </div>
        <div className="border-4 rounded-xl col-span-2 m-4 h-fit">
          <h3 className="p-2 text-center font-arabicUI3 max-sm:text-xl leading-normal text-5xl text-white">
            تفاصيل الاشتراك
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Info
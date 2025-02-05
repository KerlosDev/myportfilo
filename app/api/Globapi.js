import request from "graphql-request";
import { gql ,GraphQLClient } from "graphql-request";

const MasterUrl = 'https://ap-south-1.cdn.hygraph.com/content/cm6rgawjz0a1n07o0c3uqgsl9/master'
const emailsapi = 'https://ap-south-1.cdn.hygraph.com/content/cm5gvtuid03st08o0hz1fdxtm/master'
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3Mzc1OTA5MDIsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NtNWd2dHVpZDAzc3QwOG8waHoxZmR4dG0vbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiJlYTJhMjE2OC00ODNkLTQ0YzgtOWFhMy02OGRmNDJmZGRhYzIiLCJqdGkiOiJjbTY4a3JkNGcwOTdjMDdwbmhteTBlM2xyIn0.qoMH-RS-urQqaopKwSwXY0qxczMWvuY4VrFmzCCNW7c1uSySRaQEGb6RIDrnkCUBSeIlGqKXVi1SsjpDClP3N-aYx-oeb97HAI_JTAd886gjms-0X3DsEU6Y9gt2ZDN4_q4TJVwKUvCPAuH7G53NPDZQNyZ26Fnnhp_zS0ap5YM9YeRG1_cHrmcl5MqXQ3ywIIgTqFJy2g6IV2u9Dn1ak0WHC-bqCNerOYCmOUbpV5CkfoprWMc1PleoVhSCSAOBwxKKgWwjd_RoJVDNw9lzYC4e9AzkLc-rRHQaa7pUfe1Rh9-jc-8IbzLmjWZ-eMQFd64skw96r4xpgXBGzddhgiNAoD3BdQba7QDPRLIfQx7hAaYxoxMSWnj2Tj-b1zL3rTqDKd4TJvJw3-Q8lnaWr66OtP50tsJ2zDqY5gKejHjXwdnlGw9-dWXlg-M17MK4HDyRjUmG__HqgV3lr1G6cZfraGCkNl36gyyhKgaE3f0QnkCiS9a4fmcLHvKFOz07sSy0gj5FjdxSOCPhNkBimrxUnhO94krKhIMUuAE3df0DCTd1HSU59S_v_nL2Fv96Aso0l47ul16M0nbHKLoTsly-U2nwPeLXdW4fOrw4if6Su2VKW7yQ53VXhTfR38DlubwkJu1w19g8mlLPfIyMFcqxDhMuyRKgsaKCqfNJkvg'


const emails = async () => {
  const query8 = gql`
  query MyQuery {
  userEnrolls(first: 1000) {
    isHePaid
    phonenumber
    userEmail
  }
}
  
`
  
const client = new GraphQLClient(emailsapi, {
  headers: {
    Authorization: `Bearer ${token}`
  }
});

try {
  const result3 = await client.request(query8);
  return result3;
} catch (error) {
  console.error("Error sending enroll data:", error);
  throw new Error("Failed to send enroll data");
  }
  
}

const sendmasseges = async (name, email, message) => {


  const query2 = gql`

mutation MyMutation {
  createMessage(
    data: {name: "`+ name + `", email: "` + email + `", message: "` + message + `"}
  ) {
    id
  }
  publishManyMessagesConnection(first: 1000) {
    edges {
      node {
        id
      }
    }
  }
}`
  const reslut = await request(MasterUrl, query2)
  return reslut


}

const getMessages = async () => {
  const query8 = gql`
  query MyQuery {
  messages(first: 1000) {
    email
    id
    message
  }
}`
  const reslut4 = await request(MasterUrl, query8)
  return reslut4
}
const getProject = async () => {
  const query3 = gql`
  query MyQuery {
  projects {
    name
    slugforproject
    id
    description
    imageforcourse {
      id
      url
    }
  }
}
  `
  const reslut6 = await request(MasterUrl, query3)
  return reslut6
}
const getspecifec = async (slug) => {
  const query4 = gql`
 query MyQuery {
  projects(where: {slugforproject: "`+ slug + `"}) {
    name
    slugforproject
    id
    description
    link
    imageforcourse {
      id
      url
    }
  }
}
  `
  const reslut5 = await request(MasterUrl, query4)
  return reslut5
}
export default { sendmasseges, getMessages, getProject, getspecifec,emails }
import request from "graphql-request";
import { gql } from "graphql-request";

const MasterUrl = 'https://ap-south-1.cdn.hygraph.com/content/cm582uftf047b07welghaqu7h/master'

const sendmasseges = async (name,email,message) => {
    
    
    const query2 = gql`

mutation MyMutation {
  createMessage(
    data: {name: "`+name+`", email: "`+email+`", message: "`+message+`"}
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

const getMessages = async() => {
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
  projects(where: {slugforproject: "`+slug+`"}) {
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
    export default {sendmasseges,getMessages,getProject,getspecifec}
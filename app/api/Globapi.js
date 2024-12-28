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
    export default {sendmasseges}
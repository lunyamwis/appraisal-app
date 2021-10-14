import { gql } from '@apollo/client';

export const FETCH_USERS=gql`
query getUsers($page:Int $limit:Int) {
    users(
    page:$page
    limit:$limit)
    {
      items{
        createdAt
        isSuperuser
        id
        deletedAt
        roles
        firstName
        phoneNumber
        lastName
        isActive
        email
        username
        
      }
      page
      count
      pages
      hasNext
      hasPrev
    }
    
}
`
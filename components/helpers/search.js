import { gql } from "@apollo/client";



const SEARCH_TAGS=gql`
    query SearchTags($name:String!){
        searchTags(name:$name){
            id name 
        }
    }`
const SEARCH_COLLECTIONS=gql`
    query SearchCollections($name:String!){
        searchCollections(name:$name){
            id name 
        }
    }`
const SEARCH_CATEGORIES=gql`
    query SearchCategories($name:String!){
        searchCategories(name:$name){
            id name 
        }
    }`
const SEARCH_PRODUCTS=gql`
    query SearchProducts($name:String!){
        searchProducts(name:$name){
            name
            image
            item_collection{name}
            item_category{name}
            item_tags{name}
            id 
        }
    }`

const SEARCH_ALL = gql`
    query SearchAll($name:String!){
        searchTags(name:$name){id name}
        searchCollections(name:$name){id name}
        searchCategories(name:$name){id name}
        searchProducts(name:$name){id name}
    }

`


export { SEARCH_CATEGORIES, SEARCH_COLLECTIONS, SEARCH_PRODUCTS, SEARCH_TAGS, SEARCH_ALL };
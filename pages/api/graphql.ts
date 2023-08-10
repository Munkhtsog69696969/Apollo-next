import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
// import { connect } from "@/mongo/mongo.connector";



const typeDefs=`#graphql
    type Post{
        text:String
        images:[String]
        creatorId:String
        createdAt:String
    }

    input PostInput{
        text:String
        images:[String]
    }

    type Query{
        getAllPosts:[Post]
        getSinglePost:[Post]
    }

    type Mutation{
        createPost(input:PostInput!):ID
        updatePost(id:ID! , postUpdateInput:PostInput!):Post
        deletePost(id:ID!):ID
    }
`;

const resolvers={
    Query:{
        getAllPosts:()=>{

        },
        getSinglePost:()=>{

        }
    },
    Mutation:{
        createPost:async(_: never , args:{input:{text:string , images:string[]}})=>{
            const {text,images}=args.input;

            const result=await fetch("https://ap-south-1.aws.data.mongodb-api.com/app/data-gitlv/endpoint/data/v1/action/insertOne" , {
                method:"POST",
                headers:{
                    "Content-Type" : "application/ejson",
                    "Accept" : "application/json",
                    "apiKey" : "TpqAKQgvhZE4r6AOzpVydJ9a3tB1BLMrgDzLlBLbihKNDzSJWTAHMVbsMoIOpnM6"
                },
                body:JSON.stringify({
                    "collection":"posts",
                    "database":"test",
                    "dataSource":"Cluster0",
                    "document":{
                        "text":text,
                        "images":images
                    }
                }),
                
            }).then((res)=>{
                console.log(res);
            })
        },
        updatePost:async(_: never , args:{id:{ID:string} , postUpdateInput:{text:string , images:string[]}})=>{
            const {ID}=args.id;

            const {text,images}=args.postUpdateInput;

            // const existingPost=
        },
        deletePost:async(_:never , args:{id:{ID:string}})=>{
            const {ID}=args.id;

            
        }
    }
}

const server=new ApolloServer({
    typeDefs,
    resolvers
});

export default startServerAndCreateNextHandler(server);
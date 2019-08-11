import React from "react";
import DetailPresenter from "./DetailPresenter";
import { Query } from 'react-apollo';
import { Detail } from "../../queries";

const _details =(id)=>{ 
    
    return(
    <Query query= { Detail } variables={ {id} }>
        {
            ({loading, error, data})=>{
                if(loading) return <h1>Loading...</h1>
                if(error) return <h1>Can't Find </h1>
                if(data){
                    console.log(data);
                    return data;
                }
            }       
        }
    </Query>
    )
}
export default class extends React.Component {
    constructor(props){
        super(props);
        const {location: { pathname }} = props;
        const {match:{ params:{ id }}} = props;
        this.state = {
            result:null,
            error:null,
            loading:true,
            isMovie: pathname.includes("/movies/"),
            id
        };
    }

    async componentDidMount(){
        const {
            match:{
                params:{ id }
            },
            history:{ push }
        }=this.props;
        const newId = parseInt(id);
        if(isNaN(newId)){
            return push('/');
        }
    }

    render(){
        let { result, id } = this.state;
        result = _details(id);
        
        return(
        <DetailPresenter 
            result={result}
        />  
        )
    }   
}
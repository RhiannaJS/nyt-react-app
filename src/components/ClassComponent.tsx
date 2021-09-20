
import FunctionalCompontent from "./FunctionalComponent"
import React, { FormEvent } from "react"

const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

let url: string



type Articles ={
    docs: []
    abstract: string
    // byline: {}
    // document_type: string
    headline: {main: string}
    keywords: [{value: string}]
    // lead_paragraph: string
    multimedia: [{url: string}] 
    // news_desk: string
    // pub_date: string
    // section_name: string
    // snippet: string
    // source: string
    // subsection_name: string
    // type_of_material: string
    // uri: string
    web_url: string
    // word_count: number
    _id: string

}


type StateType = {
    searchTerm: string
    startDate?: string
    endDate?: string
    pageNumber: number
    articles: Articles[]

    
}

class ClassComponent extends React.Component <{}, StateType> {
    


    constructor(props: any){
        super(props)
        this.state ={
            searchTerm: "",
            startDate: "",
            endDate: "",
            pageNumber: 0,
            articles: []
        }
    }
    // "nNWFyGuPygky6Zq1ysV5NY4QgGP1to9A"
    // process.env.key
    

        fetchResults=()=>{
            // let currentState = this.state.articles
            url = baseURL + '?api-key=' + 'nNWFyGuPygky6Zq1ysV5NY4QgGP1to9A' + '&page=' + this.state.pageNumber + '&q=' + this.state.searchTerm
            fetch(url)
            .then(res => res.json())
            .then(json => this.setState({ articles: json.response.docs }))
            .catch(e => console.error(e))
          }
        
        
         
          
          componentDidUpdate(){
              console.log(this.state.articles)
            }
            
             handleSubmit = (e: FormEvent<HTMLFormElement>) => {
                // setPageNumber(0);
                e.preventDefault();
                // fetchResults();
                this.fetchResults();
            }
            
            render(){
                return(
                    <div>
                <h1>New York Times Articles Search App</h1>

                <form onSubmit = {this.handleSubmit}>
                    <span>Enter a single search term(required) : </span>
                    <input type="text" name="search" placeholder="Enter a keyword" onChange={(e) => this.setState({searchTerm: (e.target.value)})} />
                    <br />
                    <span>Enter a start date: </span>
                    <input type="date" name="startDate" pattern="[0-9] {8}" onChange={(e) => this.setState({startDate : (e.target.value)})} />
                    <br />
                    <span>Enter an end date: </span>
                    <input type="date" name="endDate" pattern="[0-9] {8}" onChange={(e)=>  this.setState({startDate : (e.target.value)})} />
                    <br /> 
                    <button className="submit">Submit search</button>
                </form>

                {
                    this.state.articles.map((current, index) =>{
                        return(
                            <FunctionalCompontent articles={current} key={index} />
                            
                            )
                        })
                }
            </div>
        )
    }
    
}

export default ClassComponent;
import { render } from "@testing-library/react";
import { Component } from "react";
import React from "react";
import { PropertyAccessEntityNameExpression } from "typescript";
// import ClassComponent from "./ClassComponent";

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

type PropsType = {
    articles: Articles
}


export default class ClassComponent extends Component<PropsType, {}>{
    constructor(props: PropsType){
        super(props)
        this.state = {

        }
    }



    render(){
        return(
            <div>
                {/* <div>
                    <button onClick={(e)=> }
                </div> */}
            <div key={this.props.articles._id}>

                <h3>{this.props.articles.headline.main}</h3>
                {(this.props.articles.multimedia[0].url) ? (<img alt="article" src={`http://www.nytimes.com/${this.props.articles.multimedia[0].url}`}/>) : ("")}
                <ul>
                {this.props.articles.keywords.map((keyword) => (<li key={keyword.value}>{keyword.value}</li>))}
                </ul>
                <h5>{this.props.articles.abstract}</h5>
                </div>
            </div>
        )
        }
    } 
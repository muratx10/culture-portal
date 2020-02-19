import React from 'react';
import translateThis from '../components/useTranslations';
// import { Link, graphql, useStaticQuery } from 'gatsby';

const SearchPage = () => {
  const {
    findPerson
  } = translateThis();
  //   const data = useStaticQuery(graphql`
  //     query{
  //       allMarkdownRemark{
  //         edges{
  //           node{
  //             frontmatter{
  //               title
  //               date
  //             }
  //             fields{
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `);
  return (
    <div className="search-page">
      <h1>{findPerson}</h1>
      {/* 
       <ol className={personStyles.persons}>
         {data.allMarkdownRemark.edges.map((edge) => {
           return (
             <li className={personStyles.post}>
               <Link to={`/persons/${edge.node.fields.slug}`}>
                 <h2>{edge.node.frontmatter.title}</h2>
               </Link>
               <p>{edge.node.frontmatter.date}</p>
             </li>
           );
         })}
       </ol> 
*/}
    </div>
  )
};

export default SearchPage;

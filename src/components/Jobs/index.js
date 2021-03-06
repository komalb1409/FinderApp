import React,{ useMemo } from 'react'
import {useState} from 'react'
import { useTable } from 'react-table'
//import MOCK_DATA from './MOCK_DATA.json'
import Jobs from './jobs.json'
import {COLUMNS  } from './column'
import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Sidebar from '../Sidebar';


export const Table = () => {
       
    const columns = useMemo(() => COLUMNS,[])
    const data = useMemo(() => Jobs, [])
    

    const tableInstance = useTable(
        {
            columns,
            data
        }
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,

    } = tableInstance
 
    const Home = () => {
        const [isOpen, setIsOpen] = useState(false)
    
   const toggle = () => {
        setIsOpen(!isOpen);
  }
    
    return(
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar></Navbar>
        
        <table {...getTableProps()}>
           
            <thead>
                {headerGroups.map((headerGroup)=>(
               <tr {...headerGroup.getHeaderGroupProps()}>
                   {
                       headerGroup.headers.map(column=>(
                           <th {...column.getHeaderProps()}>{column.render('Header')}
                               </th>
                       ))
                   }
                   
               </tr>
                     
                ))}
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row)=>{
                       prepareRow(row)
                       return(
                          <tr {...row.getRowProps()}>
                              {
                                 
                                  row.cells.map((cell )=>{
                                  return  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                  })}
                          
                          </tr>
                       )
                    }) }
              
            </tbody>
   
         </table>
         <Footer/>
         </div>
      
       )
        }           
   }
   export default Table      
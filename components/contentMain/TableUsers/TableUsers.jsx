import React, { useEffect, useState } from 'react'
import ArrowButton from '../../buttons/ArrowButton'
import Icons, { icons } from '../../icons/Icons'
import CheckBox from '../../Inputs/CheckBox'
import ProfileImg from '../../profileImg/profileImg'
import project from '../../ProjectsObj/projectsObj'
import ButtonNextAndPrev from './ButtonNextAndPrev'
import SectionFilter from './SectionFilter'
import Status from './Status'
import TableTd from './TableTd'
import TableTh from './TableTh'

const TableUsers = () => {

    const [status, setStatus ] = useState('')
    const [projects, setProjects] = useState(project)
    const [orderByDate, setOrderByDate] = useState(false)
    const [orderByPrice, setOrderByPrice] = useState(false)
    

    useEffect(() => {
        const filterProjects = () => {

            const proj = project.filter(e => {
                if(status === '') return e
                else return e.status.toLowerCase() === status
            })

            setProjects(proj)
        }
        filterProjects()

    }, [status])

    useEffect(() => {
        
        if (orderByDate === false){
            const orderByDescending = projects.sort((a, b) => a.projectStart.slice(4).split(',')[0] - b.projectStart.slice(4).split(',')[0])
            setProjects(orderByDescending)

        }else{
            const orderByAscending = projects.sort((a, b) => b.projectStart.slice(4).split(',')[0] - a.projectStart.slice(4).split(',')[0])
            setProjects(orderByAscending)
        }

    }, [orderByDate])

    useEffect(() => {

        if (orderByPrice === false){
            const orderByDescending = projects.sort((a, b) => a.closingPrice.slice(1).split(',').join('') - b.closingPrice.slice(1).split(',').join(''))
            setProjects(orderByDescending)

        }else{
            const orderByAscending = projects.sort((a, b) => b.closingPrice.slice(1).split(',').join('') - a.closingPrice.slice(1).split(',').join(''))
            setProjects(orderByAscending)
        }

    }, [orderByPrice])


  return (

    <div className="border shadow-md bg-white rounded-lg block  w-full overflow-x-auto">
 
        <SectionFilter value={status} onChange={e => setStatus(e.target.value)} onClick={() => setStatus('')}/>

        <table className="w-full">
            <thead>
                <tr className="text-sm text-gray-500 capitalize text-left bg-gray-50 border border-x-0">
                    <th className="py-2 px-4 font-medium">
                        <div className="flex gap-1 lg:gap-1.5 items-center">
                            <Icons icon_type={icons.checkBox} className="text-2xl sm:text-3xl rounded-lg lg:overflow-hidden bg-blue-50 text-blue-400"/>
                            <p>project Name</p>
                        </div>
                    </th>

                    <TableTh>
                        <p>type</p>
                    </TableTh>

                    <TableTh>
                        <ArrowButton text="closing Price" type={orderByPrice} onClick={() => setOrderByPrice(!orderByPrice)}/>
                    </TableTh>

                    <TableTh>
                        <ArrowButton text="project Start" type={orderByDate} onClick={() => setOrderByDate(!orderByDate)}/>
                    </TableTh>

                    <TableTh>
                        <p>status</p>
                    </TableTh>
                    
                    <TableTh>
                        <p>last Update</p>
                    </TableTh>
                </tr>

            </thead>
            
            <tbody>
                {projects?.map(proj => (

                <tr className="border-b text-black text-opacity-70 text-sm" key={proj.id}>

                    <TableTd>
                        <CheckBox>
                            <div>
                                <p className=" text-black font-medium">{proj.proyectName.name}</p>
                                <p>{proj.proyectName.company}</p>
                            </div>
                        </CheckBox>
                    </TableTd>

                    <TableTd>
                        <p>{proj.type}</p>
                    </TableTd>

                    <TableTd>
                        <p>{proj.closingPrice}</p>
                    </TableTd>

                    <TableTd>
                        <p>{proj.projectStart}</p>
                    </TableTd>

                    <TableTd>
                        <Status text={proj.status}/> 
                    </TableTd >

                    <td className="text-gray-500 py-3">
                        <ProfileImg img={proj.id}
                        name={proj.lastUpdate.name} email={proj.lastUpdate.email} />
                    </td>
                </tr>

                ))}

            </tbody>
        </table>
        

        <ButtonNextAndPrev/>
    </div>

  )
}

export default TableUsers

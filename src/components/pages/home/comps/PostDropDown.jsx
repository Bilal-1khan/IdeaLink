import React,{useState} from 'react'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'

const PostDropDown = () => {
    const [open,setOpen] = useState(false)
  return (
    <>
    <MoreHorizOutlinedIcon sx={{cursor:"pointer"}}
            onClick={()=>setOpen(!open)}
            />
            <div className={`bg-white rounded-xl w-[12.5rem] p-4 absolute right-[0rem] ${open?'block':'hidden'}`}>
              <ul>
                <li className="font-bold flex gap-2 items-center rounded-xl p-2 hover:bg-[#272727] hover:text-green-400 capitalize text-start text-black">
                  <EditIcon/>
                  <span>edit</span>
                  </li>
                <li className="font-bold flex gap-2 items-center rounded-xl p-2 hover:bg-[#272727] hover:text-red capitalize text-start text-red-600">
                  <DeleteIcon/>
                <span>delete</span>  
                </li>
              </ul>
            </div>
    </>
  )
}

export default PostDropDown
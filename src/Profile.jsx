
import {useState} from "react";
export default function Profile()
{
const [IsEditing,setIsEditing] = useState(false);
const [firstName,setFirstName] = useState("Aniket");
const [lastName,setLastName] = useState("sk");
const [ageNew,setageNew] = useState("18");
const [mobileno,setmobileno] = useState("1234567890");

 return(
   <div>
  <form className="Profile"
   onSubmit={(e)=>{
      e.preventDefault();
      setIsEditing(!IsEditing);
   }}
   >
   <label>
      First name:{""}
      {IsEditing ? (
         <input value ={firstName}
         onChange={(e) =>{
            setFirstName(e.target.value);
         }}
         />
      ):(<b> {firstName}</b>
      )}
      </label>
      <br />
      <label>
         Last name:{""}
         {IsEditing ? (
            <input 
            value = {lastName}
            onChange={(e) =>{
               setLastName(e.target.value);
            }}
            />
         ):(<b>{lastName}</b>
         )}
      </label>
      <br />
      <label>
         Age:{""}
         {IsEditing ? (
            <input 
            value = {ageNew}
            onChange={(e) =>{
               setageNew(e.target.value);
            }}
            />
         ):(<b>{ageNew}</b>
         )}
      </label>
      <br />
      <label>
      Mobile no:{""}
      {IsEditing ? (
         <input value ={mobileno}
         onChange={(e) =>{
            setmobileno(e.target.value);
         }}
         />
      ):(<b> {mobileno}</b>
      )}
      </label>
      <button className="btn" type = "submit">{IsEditing ? "Save" : "Edit"}Profile</button>
      {/* <p>
         <i>
            Hello,{firstName}{lastName}!
         </i>
      </p> */}
   
  </form>
  </div>
 );
 
}

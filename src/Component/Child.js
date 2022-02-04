import PropTypes from 'prop-types';

const Child=({name,age,bestUser : {nameUser,score},tab,handleAlert,handleAlertName,children,show})=>{
// const Child=(props)=>{
    // console.log(props)
  
    return(
        <div>
            {/* <h1>Child Component</h1>
            <h2>My name is : {props.name}</h2>
            <h2>My age is : {props.age}</h2>
            <h2>The best user is {props.bestUser.nameUser}, his score is : {props.bestUser.score}</h2>
            {/* <h2>The users are : {props.tab}</h2> */}

            {/* <ul> */}
                {/* <li>{props.tab[0]}</li> */}
                {/* {
                    props.tab.map((el)=><li>{el}</li>)
                }
            </ul>  */}

            <h1>Child Component</h1>
            <h2>My name is : {name}</h2>
            <h2>My age is : {age}</h2>
            <h2>The best user is {nameUser}, his score is : {score}</h2>
            {/* <h2>The users are : {props.tab}</h2> */}

            <ul>
                {/* <li>{props.tab[0]}</li> */}
                {
                    tab.map((el,i)=><li key={i}>{el}</li>)
                }
            </ul>
            <button onClick={handleAlert}>Alert</button>
            <br/>
            <br/>
            <button onClick={()=>handleAlertName(nameUser)}>Alert Name</button>
            {children}
            {/* Conditional rendering */}

            {
                show ?   
                
                <div> 
                  <h1>Child Component</h1>
                  <h2>My name is : {name}</h2>
                </div>

                :

                <h2>My age is : {age}</h2>
            }        

        </div>
    )

}

Child.defaultProps={
    name : 'Mahmoud',
    age : 100
}

Child.propTypes = {
    name : PropTypes.string
}

export default Child
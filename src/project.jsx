function Project(args) {
    return <>
        <div className='px-1 box shadow-lg' style={{backgroundColor:`#${args.bg}`}}>
            <h3>${args.pro}</h3>
            <hr/>
        </div>
    </>
    
  }
  
  export default Project;
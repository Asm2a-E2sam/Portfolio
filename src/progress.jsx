function Progress(args) {
  return <>
    <div className='d-flex my-2'>
        <div className='px-1 title'>{args.name}</div>
        <div className='p-0 m-0' style={{backgroundColor:"#eee",width:"400px"}}>
            <div className='p-0 m-0' style={{backgroundColor:"#cba",width:`${args.size}%`,height:"30px"}}>
            </div>
        </div>
    </div>
  </>
  
}

export default Progress;
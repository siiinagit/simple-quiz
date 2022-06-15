import React, {useContext} from 'react'
import { KvizContext } from './context'

const Tester = () => {
   const {data} = useContext(KvizContext)
   console.log(data);
  return (
    <div>
        {data.question}
    </div>
  )
}

export default Tester

import './App.css'
import ControlField from './Cmponents/ControlledField/ControlField'
import FamilyTree from './Cmponents/FamilyTree/FamilyTree'
import FromAction from './Cmponents/FormAction/FromAction'
import HookForm from './Cmponents/HookFrom/HookForm'
import ProductManagement from './Cmponents/ProductManagement/ProductManagement'
import SimpleForm from './Cmponents/SimpleForm/SimpleForm'
import UnControlledField from './Cmponents/UnControlledField/UnControlledField'

function App() {
  

  return (
    <>
      <h1 className='text-center mt-10 text-5xl font-bold'>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FromAction></FromAction> */}
      {/* <ControlField></ControlField> */}
      {/* <UnControlledField></UnControlledField> */}
      {/* <HookForm></HookForm> */}
      {/* <ProductManagement></ProductManagement> */}
      <FamilyTree></FamilyTree>
    </>
  )
}

export default App

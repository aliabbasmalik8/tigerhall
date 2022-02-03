import ClipLoader from "react-spinners/ClipLoader";


export default function Loader(){
  return (
    <div style={{
      top: 'calc(50% - 25px)',
      position: 'fixed',
      left: '50%',
      transform: 'translate(-50%, 0)'
    }}>
      <ClipLoader
        size={150}
        color='grey'
        loading={true}
      />
    </div>
  )
}
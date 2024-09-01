import KrutrimMap from '@/components/custom/olaKrutrim'
import ButtonModal from '@/components/ui/ButtonModal'

const page = () => {
  return (
    <>
      <div style={{ height: '300px', width: 'full', display: 'flex', justifyContent: 'center', alignItems: 'center', top:'25px' }}>
        <KrutrimMap showroutes={true}/>
      </div>

      <ButtonModal />
      <h1 className="text-red-500">This is a test message</h1>
    </>
  )
}

export default page
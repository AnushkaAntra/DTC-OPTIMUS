const Schedule = ({schedule}: any) => {

  return (
    <div className="block px-4 py-3 mb-2 border-l-4 border-secondary bg-gray-100 hover:bg-gray-300 transition-colors cursor-pointer">
      <h3 className='text-lg font-medium text-tertiary'>{schedule?.toString() || 'not fetched'}</h3>
    </div>
  )
}

export default Schedule
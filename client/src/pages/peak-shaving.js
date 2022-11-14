import Form from '../components/form'
import Table from '../components/table'
import Graph from '../components/graph'
import {useState} from 'react'
function PeakShaving() {
    const [shouldUpdateTable, setShouldUpdateTable] = useState(true)
    return (
    <div className="peak-shaving h-[100vh] flex flex-col p-2 bg-neutral-400 rounded-2xl overflow-hidden">
      <div className="h-[50%] p-2 m-2 rounded-2xl bg-neutral-100">
      <h3 className="m-1">Power Cost</h3>
        <Graph></Graph>
      </div>
      <div className="flex flex-row items-center justify-between h-[50%]">
        <div className="w-[50%] h-[100%] p-4 m-2 rounded-2xl bg-neutral-100 overflow-y-scroll">
            <h3 className="m-1">Create Alert</h3>
            <Form shouldUpdateTable={shouldUpdateTable} setShouldUpdateTable={setShouldUpdateTable} ></Form>
        </div>
        <div className="w-[50%] h-[100%] p-4 m-2 rounded-2xl bg-neutral-100">
            <h3 className="m-1">Alerts</h3>
            <Table shouldUpdateTable={shouldUpdateTable} setShouldUpdateTable={setShouldUpdateTable}></Table>
        </div>
      </div>
    </div>
  );
}
export default PeakShaving;
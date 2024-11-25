import { Button, ButtonGroup, Checkbox, Select, SelectItem } from '@nextui-org/react'
import { ChevronLeft, ChevronRight, Circle, Disc2, Download, Search } from 'lucide-react'
import React from 'react'
const list = [{
    label: 'All', value: "1"
},
{
    label: "None", value: "0"
}]
const Team = () => {
    return (
        <div className='sm:px-[35px] sm:pl-24 px-4'>
               <div className='block md:hidden bg-[#d7d7d9] border rounded-sm w-full p-1 mb-3 mt-5 px-[20px]'>
                    Team
                </div>
            <div className='mt-[2rem] w-full flex flex-col md:flex-row gap-3 justify-between'>
                <div className='flex flex-row gap-3'>
                    <Select
                        size="xs"
                        radius='none'
                        variant="bordered"
                        classNames={{
                            trigger: "shadow-none",
                        }}
                        className="w-[80px] outline-0"
                        startContent={<Checkbox
                            defaultSelected radius="none"></Checkbox>}
                    >
                        {list.map((animal) => (
                            <SelectItem
                                className="max-w-xs"
                                hideSelectedIcon={true} key={animal.value} value={animal.value}>
                                {animal.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Button className='bg-transparent border rounded-sm hover:border-cyan-200' isIconOnly aria-label="Like">
                        <Download strokeWidth={1} />
                    </Button>
                    <Button className='bg-transparent border rounded-sm hover:border-cyan-200' isIconOnly aria-label="Like">
                        <Disc2 strokeWidth={1} size={16} />
                    </Button>
                    <Button className='bg-transparent border rounded-sm hover:border-cyan-200' isIconOnly aria-label="Like">
                        <Circle strokeWidth={1} size={16} />
                    </Button>
                </div>
                <div>
                    <div className='flex flex-row gap-2 border-1 rounded-sm py-2 px-2 w-full md:w-[400px]'>
                        <Search strokeWidth={2} className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />  <input type='text' className='outline-0' placeholder='Search Items' />
                    </div>
                </div>
            </div>
            <div className='mt-5'>
            <div className='flex flex-col md:flex-row justify-between flex-wrap w-full md:w-max gap-1 md:gap-0'>
           
                </div>
                <div className='flex flex-col md:flex-row items-end justify-end gap-1 md:gap-0'>
                <Button className='bg-cyan-50 border rounded-sm w-full md:w-max'  >Archive</Button>
                    <Button className='bg-cyan-50 border rounded-sm w-full md:w-max'   >All</Button>
                    <Button className='bg-cyan-50 border rounded-sm w-full md:w-max'   >Active</Button>
                    <Button className='bg-cyan-50 border rounded-sm w-full md:w-max'   >Inactive</Button>
                </div>
                <div className='border rounded-sm mt-5 md:mt-0'>
                    <div className='h-[40dvh] flex justify-center items-center'>
                    <h1 className='text-center font-[600] text-gray-400'>No Result To Display</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between mt-5 mb-5'>
                
                <div className='flex flex-row'>
                    <ButtonGroup radius='none' className='border rounded-sm'>
                        <Button isIconOnly className='bg-cyan-50 border rounded-sm' ><ChevronLeft size={28} /> <ChevronLeft size={28} /></Button>
                        <Button isIconOnly className='bg-cyan-50 border rounded-sm'  ><ChevronLeft size={18} /> </Button>
                        <Button isIconOnly className='bg-cyan-50 border rounded-sm'  ><ChevronRight size={18} /></Button>
                        <Button isIconOnly  className='bg-cyan-50 border rounded-sm'  ><ChevronRight size={28} /><ChevronRight size={28} /></Button>
                    </ButtonGroup>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center'>
                    <p className='hidden md:flex text-[14px] font-[600]'>Number of Results :</p> <select className='w-[60px] h-[40px] border rounded-sm bg-cyan-50'>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={50}>50</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Team

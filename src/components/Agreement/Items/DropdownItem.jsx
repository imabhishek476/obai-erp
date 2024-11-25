import { InputAdornment, TextField } from '@mui/material';
import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Tooltip,
} from '@nextui-org/react';
import {
  ArrowBigLeft,
  GripHorizontal,
  GripVertical,
  Image,
  Minus,
  Plus,
  Settings,
  X,
} from 'lucide-react';
import { Resizable } from 're-resizable';
import React, { useEffect, useState } from 'react';

const CustomDropdownItem = ({
    item,
    setItems,
    setSelectedFieldItem,
    selectedSignee,
    setUpdate,
    colors,
    signees
}) => {
  const [option, setOption] = useState(new Set([]));
  useEffect(() => {
    setItems((prev) => {
      const index = prev.findIndex((el) => el.id === item.id);
      if (index !== -1) {
        const removed = prev.splice(index, 1);
      }

      prev.push({
        ...item,
        text: option?.currentKey,
      });
      //   console.log(text, item);
      setUpdate((prev) => !prev);
      return prev;
    });
  }, [option]);
  return (
    <Tooltip
      key={item.id}
      content={`This place is for ${item?.signee?.fullname}`}
      isDisabled={item?.signee?.fullname === selectedSignee?.fullname}
    >
      <div
        // key={item.id}
        style={{
          top: item.top || item.position.y,
          left: item.left || item.position.x,
          width: item.type === 'image' ? 'auto' : '20%',
          height: item.type === 'image' ? 'auto' : '3.6%',
          backgroundColor:
            colors[
              signees.findIndex(
                (ele) => ele.fullname === item?.signee?.fullname
              ) % 3
            ]?.color,
          cursor:
            item?.signee?.fullname === selectedSignee?.fullname
              ? 'pointer'
              : 'not-allowed',
        }}
        // onClick={() => {
        //   // if (item?.signee?.fullname === selectedSignee?.fullname) {
        //   if (true) {
        //     onDateHandler(item);
        //   }
        // }}
        className={`absolute z-[20] p-1 lg:p-3 text-[#151513] rounded-sm md:rounded-lg hover:cursor-pointer`}
      >
        <div
          className="w-full h-full relative flex items-center justify-center"
          id={item.id}
        >
          <div className="p-1 w-full">
            <Select
              // label="Favorite Animal"
              variant="bordered"
              placeholder="Select"
              radius="none"
              selectedKeys={option}
              // className="max"
              size="sm"
              onSelectionChange={setOption}
            >
              {item.labels.map((label, index) => (
                <SelectItem key={index} value={label}>
                  {label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

export default CustomDropdownItem;

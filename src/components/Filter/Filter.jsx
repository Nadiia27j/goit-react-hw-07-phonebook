import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      Find contact by name
      <Input type="text" value={filter} onChange={onChangeFilter}></Input>
    </Label>
  );
}
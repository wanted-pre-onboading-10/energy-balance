import { useAppDispatch, useAppSelector } from 'redux/hooks';
import {
  historyAdded,
  historyCleared,
  historyDeleted,
} from 'redux/historySlice';

const useHistory = () => {
  const dispatch = useAppDispatch();

  return {
    getHistory() {
      return useAppSelector((state) => state.history);
    },
    clearHistory() {
      return dispatch(historyCleared());
    },
    deleteHistory(term: string) {
      return dispatch(historyDeleted(term.toLowerCase()));
    },
    createNewHistory(term: string) {
      dispatch(historyAdded(term.toLowerCase()));
    },
  };
};

export default useHistory;

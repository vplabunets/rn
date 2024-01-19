export type Item = {
  id: number;
  title: string;
  description: string;
  feature: string;
  price: number;
  rating: number;
  url: string;
};

export interface FormProps {
  handleModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible: boolean;
  handleFilteredItems: (query: string, isChecked: boolean) => void;
}
export interface ModalProps {
  handleModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible: boolean;
}

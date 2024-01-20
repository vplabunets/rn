export type Icon = 'heart' | 'search-sharp';

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
export interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
}
export interface IconButtonProps {
  icon: string;
  color: string;
  onPress: () => void;
}

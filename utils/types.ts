export type NavLink = {
  href: string;
  label: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  featured: boolean;
  thumbnailImage: string;
  modelImage: string;
  galleryImages: string[];
  price: number;
  attributes: string[];
};

export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type formInputProps = {
  type: string;
  name: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TextAreaInputProps = {
  name: string;
  label: string;
  defaultValue?: string;
};

export type SingleImageInputProps = {
  name: string;
  label?: string;
};

export type ListInputProps = {
  name: string;
  label: string;
  placeholder?: string;
};

export type CheckboxInputProps = {
  name: string;
  label: string;
  defaultChecked: boolean;
};

export type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string,
  children?: React.ReactNode;
}
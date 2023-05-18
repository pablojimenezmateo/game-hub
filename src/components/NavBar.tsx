import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSubmitSearch: (value: string) => void;
}

const NavBar = ({ onSubmitSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={16} />
      <SearchInput onSubmitSearch={onSubmitSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

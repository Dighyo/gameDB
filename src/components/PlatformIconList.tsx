import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaXbox,
  FaLinux,
} from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    mac: FaApple,
    xbox: FaXbox,
    linux: FaLinux,
    android: DiAndroid,
    ios: MdPhoneIphone,
    nintendo: BsNintendoSwitch,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} color="gray.500" size={"sm"} />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;

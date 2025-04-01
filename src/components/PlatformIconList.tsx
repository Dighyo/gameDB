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
import { Platform } from "@/hooks/usePlatforms";
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
        {platforms.map((platform) => {
          const IconComponent = iconMap[platform.slug]; // Get the correct icon

          if (!IconComponent) return null; // ✅ Prevent rendering an invalid icon

          return (
            <Icon
              key={platform.id}
              as={IconComponent}
              color="gray.500"
              boxSize={4} // ✅ Use 'boxSize' instead of 'size'
            />
          );
        })}
      </HStack>
    </>
  );
};

export default PlatformIconList;

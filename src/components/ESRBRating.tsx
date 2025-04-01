import everyone from "../assets/Everyone.webp";
import everyonePlusTen from "../assets/Everyone 10+.webp";
import teen from "../assets/Teen.webp";
import mature from "../assets/Mature.webp";
import adults from "../assets/Adults.webp";
import ratingPending from "../assets/Rating Pending.webp";
import { Button, Image, ImageProps, Popover, Portal } from "@chakra-ui/react";
import { AiFillSafetyCertificate } from "react-icons/ai";

export interface ESRBRating {
  id: number;
  slug: string;
  name: string;
}
interface Props {
  esrb_rating: ESRBRating;
}

const ESRBRating = ({ esrb_rating }: Props) => {
  if (esrb_rating === null) return null;

  const esrbRatingMap: { [key: number]: ImageProps } = {
    1: { src: everyone, alt: "E for everyone" },
    2: { src: everyonePlusTen, alt: "E for everyone over 10" },
    3: { src: teen, alt: "T for teens" },
    4: { src: mature, alt: "M for Mature" },
    5: { src: adults, alt: "A for adults" },
    6: { src: ratingPending, alt: "RP for rating pending" },
  };

  return (
    <>
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button size="md" variant="outline" width="100%">
            ESRB Rating <AiFillSafetyCertificate />
          </Button>
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content width="auto">
              <Popover.Arrow />
              <Popover.Body justifyItems="center">
                <Image
                  {...esrbRatingMap[esrb_rating.id]}
                  boxSize="120px"
                  fit="contain"
                />
              </Popover.Body>
            </Popover.Content>
          </Popover.Positioner>
        </Portal>
      </Popover.Root>
    </>
  );
};

export default ESRBRating;

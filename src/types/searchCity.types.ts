import WeatherTypes from "./weatherObject.types";

export default interface SearchProps {
    (
        e: React.KeyboardEvent<HTMLInputElement>,
        dataSetter: (data: object) => void,
        querySetter: (data: string) => void
    ): void;
}

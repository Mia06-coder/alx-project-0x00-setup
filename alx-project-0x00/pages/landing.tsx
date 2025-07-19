import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <Button
        title="Click Me"
        styles="text-sm rounded-sm bg-blue-500 text-white px-4 py-2"
      />{" "}
      <Button
        title="Get Started"
        styles="text-base rounded-md bg-green-500 text-white px-4 py-2"
      />
      <Button
        title="Join Now"
        styles="text-lg rounded-lg bg-purple-500 text-white px-4 py-2"
      />
      <Button
        title="Join Now"
        styles="text-lg rounded-full bg-purple-500 text-white px-4 py-2"
      />
    </div>
  );
};

export default Landing;

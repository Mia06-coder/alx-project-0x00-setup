import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />

      <Button title="Click Me" size="small" shape="rounded-sm" />
      <Button title="Submit" size="medium" shape="rounded-md" />
      <Button title="Join Now" size="large" shape="rounded-full" />
    </div>
  );
};

export default Landing;

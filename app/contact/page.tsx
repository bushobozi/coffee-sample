import { Input, TextArea, Grid, Button } from "../components";

export default function Contact() {
  return (
    <div className="flex justify-start items-center h-fit flex-col p-3">
      <h1 className="text-center my-8 lg:text-5xl text-4xl font-bold">
        Write to Us Today
      </h1>
      <div className="max-w-4xl container mx-auto p-2">
        <Grid>
          <Input
            label="First Name"
            id="fname"
            required={true}
            name="fname"
            type="text"
            placeholder="Enter first name"
          />
          <Input
            label="Last Name"
            id="lname"
            required={true}
            name="lname"
            type="text"
            placeholder="Enter last name"
          />
        </Grid>
        <Input
          label="Enter Email"
          id="email"
          required={true}
          name="email"
          type="email"
          placeholder="Enter email"
        />
        <div className="mb-2" />
        <TextArea
          label="Enter Message"
          id="emessage"
          name="emessage"
          placeholder="hello..."
          required={true}
          rows={8}
        />
        <div className="mb-4" />
        <Button variant="primary" size="xl" block={true} roundedFull={true}>
          Send Message
        </Button>
      </div>
    </div>
  );
}

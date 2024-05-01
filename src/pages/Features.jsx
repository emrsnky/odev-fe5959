import Card from "./components/Card";

const Features = () => {
  return (
    <div className="container px-lg-5">
      <div className="row gx-lg-5">
        <Card
          icon={<i className="bi bi-collection fs-3 "></i>}
          heading={"Fresh new layout"}
          title={
            "With Bootstrap 5, we've created a fresh new layout for this template!"
          }
        />
        <Card
          icon={<i className="bi bi-cloud-download fs-3 "></i>}
          heading={"Free to download"}
          title={"As always, Start Bootstrap has a powerful collectin of free templates."}
        />
        <Card
          icon={<i className="bi bi-card-heading fs-3 "></i>}
          heading={"Jumbotron hero header"}
          title={
            "The heroic part of this template is the jumbotron hero header!"
          }
        />
        <Card
          icon={<i className="bi bi-bootstrap fs-3 "></i>}
          heading={"Feature boxes"}
          title={"We've created some custom feature boxes using Bootstrap icons!"}
        />
        <Card
          icon={<i className="bi bi-code fs-3 "></i>}
          heading={"Simple clean code"}
          title={"We keep our dependencies up to date and squash bugs as they come!"}
        />
        <Card
          icon={<i className="bi bi-patch-check fs-3 "></i>}
          heading={"A name you trust"}
          title={"Start Bootstrap has been the leader in free Bootstrap templates since 2013!"}
        />
      </div>
    </div>
  );
};

export default Features;

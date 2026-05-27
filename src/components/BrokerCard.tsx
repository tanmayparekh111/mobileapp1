type Props = {
  name: string;
  logo: string;
};

function BrokerCard({
  name,
  logo
}: Props) {

  return (
    <div className="broker-card">

      <img
        src={logo}
        alt={name}
        className="broker-real-logo"
      />

      <div>

        <h4>{name}</h4>

        <p>Connect instantly</p>

      </div>

    </div>
  );
}

export default BrokerCard;
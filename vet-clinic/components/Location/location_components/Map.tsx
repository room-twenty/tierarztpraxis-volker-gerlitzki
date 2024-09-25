const Map: React.FC = () => {
  return (
    <div className="flex justify-center py-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.943195060647!2d10.21594511342275!3d53.48734477221505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1f26202feaddd%3A0xc453e92bc08f5d39!2sDr.%20Volker%20Robert%20Gerlitzki!5e0!3m2!1sde!2sde!4v1722773235454!5m2!1sde!2sde"
        style={{ width: '100%', maxWidth: '600px', height: '35vh' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Standortkarte"
      />
    </div>
  );
};

export default Map;
import Image from "next/image";

export default function ProfilePic() {
  return (
    <section>
      <Image
        src="/images/profile-photo_431x420.png"
        width={200}
        height={200}
        alt="Dave Gray"
        priority={true}
      />
    </section>
  );
}

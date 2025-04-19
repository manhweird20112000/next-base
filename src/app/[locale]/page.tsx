import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Home() {
  const t = await getTranslations("homepage");
  return (
    <div>
      <Link href="/product">
        <Button>Go to product</Button>
      </Link>
      {t("title")}
    </div>
  );
}

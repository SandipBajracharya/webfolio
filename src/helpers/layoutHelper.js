import MainLayout from "@/layouts/MainLayout";

export function mainLayoutHelper() {
  const Layout = (page) => (
    <MainLayout>
      <div>
        {page}
      </div>
    </MainLayout>
  );

  return Layout;
}

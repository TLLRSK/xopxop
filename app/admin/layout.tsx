import AdminSidebar from "@/components/admin/AdminSidebar";
import Container from "@/components/global/Container";
import SectionTitle from "@/components/global/SectionTitle";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-[68px] min-h-[calc(100dvh-68px)]">
      <SectionTitle text="dashboard" />
      <Container className="grid lg:grid-cols-12 gap-12 py-16">
        <div className="col-span-2">
          <AdminSidebar />
        </div>
        <div className="col-span-10">{children}</div>
      </Container>
    </section>
  );
}

export default DashboardLayout;

import LogosWrapper from "layout/LogosWrapper";

const logos = [
  { img: "/images/backed-by/bain.png", className: "h-[1.8em]" },
  { img: "/images/backed-by/seq.png", className: "h-[1em]" },
  { img: "/images/backed-by/ant.png", className: "h-[1.7em]" },
  { img: "/images/backed-by/tig.png", className: "h-[1em]" },
  { img: "/images/backed-by/xin.png", className: "h-[1.8em]" },
  { img: "/images/backed-by/tet.png", className: "h-[2.6em]" },
  { img: "/images/backed-by/stb.png", className: "h-[.8em]" },
  { img: "/images/backed-by/inv.png", className: "h-[3.4em]" },
  { img: "/images/backed-by/coa.png", className: "h-[1.1em]" },
  { img: "/images/backed-by/tra.png", className: "h-[1.4em]" },
  { img: "/images/backed-by/chi-1.png", className: "h-[2em]" },
  { img: "/images/backed-by/blo.png", className: "h-[1.5em]" },
  { img: "/images/backed-by/bai.png", className: "h-[1.8em]" },
  { img: "/images/backed-by/chi-2.png", className: "h-[1.8em]" },
  { img: "/images/backed-by/bloc.png", className: "h-[3em]" },
  { img: "/images/backed-by/dap.png", className: "h-[1.4em]" },
  { img: "/images/backed-by/chi-3.png", className: "h-[1.4em]" },
  { img: "/images/backed-by/chi-4.png", className: "h-[1.4em]" },
  { img: "/images/backed-by/san.png", className: "h-[1.3em]" },
  { img: "/images/backed-by/pri.png", className: "h-[2em]" },
  { img: "/images/backed-by/ssg.png", className: "h-[1.8em]" },
];

function BackedBy() {
  return <LogosWrapper title="BACKED BY" logos={logos} />;
}

export default BackedBy;

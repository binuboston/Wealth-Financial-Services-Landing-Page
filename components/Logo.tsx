import svgPaths from "../imports/svg-6iwr56tj0b";

function Group() {
  return (
    <div className="absolute inset-[25.13%_8.21%_44.88%_30.98%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 58">
        <g id="Group">
          <path d={svgPaths.p159de800} fill="#003448" id="Vector" />
          <path d={svgPaths.p1d645580} fill="#003448" id="Vector_2" />
          <path d={svgPaths.p23dc5460} fill="#003448" id="Vector_3" />
          <path d={svgPaths.p1427e80} fill="#003448" id="Vector_4" />
          <path d={svgPaths.p351db400} fill="#9ece6c" id="Vector_5" />
          <path d={svgPaths.p331f84c0} fill="#003448" id="Vector_6" />
          <path d={svgPaths.p111af880} fill="#003448" id="Vector_7" />
          <path d={svgPaths.pd4d0c00} fill="#003448" id="Vector_8" />
          <path d={svgPaths.p149fb00} fill="#003448" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[63.19%_8.17%_24.73%_30.8%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 346 24">
        <g id="Group">
          <path d={svgPaths.p353b7e80} fill="#003448" id="Vector" />
          <path d={svgPaths.p12e1dc80} fill="#003448" id="Vector_2" />
          <path d={svgPaths.p3ec0f980} fill="#003448" id="Vector_3" />
          <path d={svgPaths.p32aee200} fill="#003448" id="Vector_4" />
          <path d={svgPaths.p19eb0a80} fill="#003448" id="Vector_5" />
          <path d={svgPaths.p1e124c80} fill="#003448" id="Vector_6" />
          <path d={svgPaths.p36260180} fill="#003448" id="Vector_7" />
          <path d={svgPaths.p27964740} fill="#003448" id="Vector_8" />
          <path d={svgPaths.p1332400} fill="#003448" id="Vector_9" />
          <path d={svgPaths.p1d266900} fill="#003448" id="Vector_10" />
          <path d={svgPaths.p3e5f5d80} fill="#003448" id="Vector_11" />
          <path d={svgPaths.p3e0e9f00} fill="#003448" id="Vector_12" />
          <path d={svgPaths.p2866dc00} fill="#003448" id="Vector_13" />
          <path d={svgPaths.pa586c40} fill="#003448" id="Vector_14" />
          <path d={svgPaths.p2eefd200} fill="#003448" id="Vector_15" />
          <path d={svgPaths.pc03ab80} fill="#003448" id="Vector_16" />
          <path d={svgPaths.p71b380} fill="#003448" id="Vector_17" />
          <path d={svgPaths.p11157480} fill="#003448" id="Vector_18" />
          <path d={svgPaths.p2a1df500} fill="#003448" id="Vector_19" />
          <path d={svgPaths.p8aa280} fill="#003448" id="Vector_20" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[25.13%_8.17%_24.73%_30.8%]" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[24.03%_74.11%_24.03%_8.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 101">
        <g id="Group">
          <path d={svgPaths.p2fe12200} fill="#9ece6c" id="Vector" />
          <path d={svgPaths.p3cb98900} fill="#003448" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[24.03%_6.03%_24.03%_8.17%]" data-name="Group">
      <Group2 />
      <div className="absolute inset-[25.13%_6.03%_71.81%_91.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 6">
          <path d={svgPaths.p1bd81a00} fill="#003448" id="Vector" />
        </svg>
      </div>
      <Group3 />
    </div>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} data-name="Dhanovaa_Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Vector" opacity="0.45"></g>
      </svg>
      <Group4 />
    </div>
  );
}

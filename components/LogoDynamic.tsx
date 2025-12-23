import svgPaths from "../imports/svg-vjjh9rie7r";

interface LogoDynamicProps {
  className?: string;
  variant?: 'light' | 'dark';
}

function Group({ variant }: { variant: 'light' | 'dark' }) {
  const fillColor = variant === 'light' ? 'white' : '#003448';
  const accentColor = variant === 'light' ? '#9FCD6E' : '#9FCD6E';
  const secondaryColor = variant === 'light' ? '#68C1AE' : '#68C1AE';

  return (
    <div className="absolute bottom-[0.1%] left-0 right-[0.01%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 283 58">
        <g id="Group">
          <path d={svgPaths.p2e7d6840} fill={fillColor} id="Vector" />
          <path d={svgPaths.p8571b00} fill={fillColor} id="Vector_2" />
          <path d={svgPaths.p3e98c780} fill={fillColor} id="Vector_3" />
          <path d={svgPaths.p18415c00} fill={fillColor} id="Vector_4" />
          <path d={svgPaths.p7ce9a00} fill={accentColor} id="Vector_5" />
          <path d={svgPaths.p8d0af40} fill={fillColor} id="Vector_6" />
          <path d={svgPaths.p2b16c600} fill={fillColor} id="Vector_7" />
          <path d={svgPaths.p29d99100} fill={fillColor} id="Vector_8" />
          <path d={svgPaths.pbeb8600} fill={fillColor} id="Vector_9" />
          <path d={svgPaths.p165ec220} fill={fillColor} id="Vector_10" />
          <path d={svgPaths.p36bd3980} fill={fillColor} id="Vector_11" />
          <path d={svgPaths.p4ccc580} fill={fillColor} id="Vector_12" />
          <path d={svgPaths.p1e296e00} fill={fillColor} id="Vector_13" />
          <path d={svgPaths.p3b3a580} fill={fillColor} id="Vector_14" />
          <path d={svgPaths.p3c745700} fill={fillColor} id="Vector_15" />
          <path d={svgPaths.p1f02ea00} fill={fillColor} id="Vector_16" />
          <path d={svgPaths.p2dfd5500} fill={fillColor} id="Vector_17" />
          <path d={svgPaths.p3e79dd80} fill={fillColor} id="Vector_18" />
          <path d={svgPaths.p29625140} fill={fillColor} id="Vector_19" />
          <path d={svgPaths.p341afa00} fill={fillColor} id="Vector_20" />
          <path d={svgPaths.p28c38000} fill={fillColor} id="Vector_21" />
          <path d={svgPaths.p9e3b800} fill={fillColor} id="Vector_22" />
          <path d={svgPaths.p2fb57a80} fill={fillColor} id="Vector_23" />
          <path d={svgPaths.p17af7900} fill={fillColor} id="Vector_24" />
          <path d={svgPaths.p28647ea0} fill={fillColor} id="Vector_25" />
          <path d={svgPaths.p3aa19300} fill={fillColor} id="Vector_26" />
          <path d={svgPaths.p24c3d900} fill={fillColor} id="Vector_27" />
          <path d={svgPaths.p21443d48} fill={fillColor} id="Vector_28" />
          <path d={svgPaths.p10e59580} fill={fillColor} id="Vector_29" />
          <path d={svgPaths.p3def3e30} fill={fillColor} id="Vector_30" />
          <path d={svgPaths.p193f6d00} fill={accentColor} id="Vector_31" />
          <path d={svgPaths.p37fe6280} fill={secondaryColor} id="Vector_32" />
        </g>
      </svg>
    </div>
  );
}

export default function LogoDynamic({ className = "", variant = "dark" }: LogoDynamicProps) {
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: '283/58' }} data-name="logo-light-full 1">
      <Group variant={variant} />
    </div>
  );
}
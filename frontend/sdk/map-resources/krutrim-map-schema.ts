var re = {
    $version: 8,
    $root: {
        version: {
            required: !0,
            type: "enum",
            values: [8]
        },
        name: { type: "string" },
        metadata: { type: "*" },
        center: {
            type: "array",
            value: "number"
        },
        zoom: { type: "number" },
        bearing: {
            type: "number",
            default: 0,
            period: 360,
            units: "degrees"
        },
        pitch: {
            type: "number",
            default: 0,
            units: "degrees"
        },
        light: { type: "light" },
        sky: { type: "sky" },
        projection: { type: "projection" },
        terrain: { type: "terrain" },
        sources: {
            required: !0,
            type: "sources"
        },
        sprite: { type: "sprite" },
        glyphs: { type: "string" },
        transition: { type: "transition" },
        layers: {
            required: !0,
            type: "array",
            value: "layer"
        }
    },
    sources: { "*": { type: "source" } },
    source: ["source_vector", "source_raster", "source_raster_dem", "source_geojson", "source_video", "source_image"],
    source_vector: {
        type: {
            required: !0,
            type: "enum",
            values: { vector: {} }
        },
        url: { type: "string" },
        tiles: {
            type: "array",
            value: "string"
        },
        bounds: {
            type: "array",
            value: "number",
            length: 4,
            default: [-180, -85.051129, 180, 85.051129]
        },
        scheme: {
            type: "enum",
            values: {
                xyz: {},
                tms: {}
            },
            default: "xyz"
        },
        minzoom: {
            type: "number",
            default: 0
        },
        maxzoom: {
            type: "number",
            default: 22
        },
        attribution: { type: "string" },
        promoteId: { type: "promoteId" },
        volatile: {
            type: "boolean",
            default: !1
        },
        "*": { type: "*" }
    },
    source_raster: {
        type: {
            required: !0,
            type: "enum",
            values: { raster: {} }
        },
        url: { type: "string" },
        tiles: {
            type: "array",
            value: "string"
        },
        bounds: {
            type: "array",
            value: "number",
            length: 4,
            default: [-180, -85.051129, 180, 85.051129]
        },
        minzoom: {
            type: "number",
            default: 0
        },
        maxzoom: {
            type: "number",
            default: 22
        },
        tileSize: {
            type: "number",
            default: 512,
            units: "pixels"
        },
        scheme: {
            type: "enum",
            values: {
                xyz: {},
                tms: {}
            },
            default: "xyz"
        },
        attribution: { type: "string" },
        volatile: {
            type: "boolean",
            default: !1
        },
        "*": { type: "*" }
    },
    source_raster_dem: {
        type: {
            required: !0,
            type: "enum",
            values: { "raster-dem": {} }
        },
        url: { type: "string" },
        tiles: {
            type: "array",
            value: "string"
        },
        bounds: {
            type: "array",
            value: "number",
            length: 4,
            default: [-180, -85.051129, 180, 85.051129]
        },
        minzoom: {
            type: "number",
            default: 0
        },
        maxzoom: {
            type: "number",
            default: 22
        },
        tileSize: {
            type: "number",
            default: 512,
            units: "pixels"
        },
        attribution: { type: "string" },
        encoding: {
            type: "enum",
            values: {
                terrarium: {},
                mapbox: {},
                custom: {}
            },
            default: "mapbox"
        },
        redFactor: {
            type: "number",
            default: 1
        },
        blueFactor: {
            type: "number",
            default: 1
        },
        greenFactor: {
            type: "number",
            default: 1
        },
        baseShift: {
            type: "number",
            default: 0
        },
        volatile: {
            type: "boolean",
            default: !1
        },
        "*": { type: "*" }
    },
    source_geojson: {
        type: {
            required: !0,
            type: "enum",
            values: { geojson: {} }
        },
        data: {
            required: !0,
            type: "*"
        },
        maxzoom: {
            type: "number",
            default: 18
        },
        attribution: { type: "string" },
        buffer: {
            type: "number",
            default: 128,
            maximum: 512,
            minimum: 0
        },
        filter: { type: "*" },
        tolerance: {
            type: "number",
            default: 0.375
        },
        cluster: {
            type: "boolean",
            default: !1
        },
        clusterRadius: {
            type: "number",
            default: 50,
            minimum: 0
        },
        clusterMaxZoom: { type: "number" },
        clusterMinPoints: { type: "number" },
        clusterProperties: { type: "*" },
        lineMetrics: {
            type: "boolean",
            default: !1
        },
        generateId: {
            type: "boolean",
            default: !1
        },
        promoteId: { type: "promoteId" }
    },
    source_video: {
        type: {
            required: !0,
            type: "enum",
            values: { video: {} }
        },
        urls: {
            required: !0,
            type: "array",
            value: "string"
        },
        coordinates: {
            required: !0,
            type: "array",
            length: 4,
            value: {
                type: "array",
                length: 2,
                value: "number"
            }
        }
    },
    source_image: {
        type: {
            required: !0,
            type: "enum",
            values: { image: {} }
        },
        url: {
            required: !0,
            type: "string"
        },
        coordinates: {
            required: !0,
            type: "array",
            length: 4,
            value: {
                type: "array",
                length: 2,
                value: "number"
            }
        }
    },
    layer: {
        id: {
            type: "string",
            required: !0
        },
        type: {
            type: "enum",
            values: {
                fill: {},
                line: {},
                symbol: {},
                circle: {},
                heatmap: {},
                "fill-extrusion": {},
                raster: {},
                hillshade: {},
                background: {}
            },
            required: !0
        },
        metadata: { type: "*" },
        source: { type: "string" },
        "source-layer": { type: "string" },
        minzoom: {
            type: "number",
            minimum: 0,
            maximum: 24
        },
        maxzoom: {
            type: "number",
            minimum: 0,
            maximum: 24
        },
        filter: { type: "filter" },
        layout: { type: "layout" },
        paint: { type: "paint" }
    },
    layout: ["layout_fill", "layout_line", "layout_circle", "layout_heatmap", "layout_fill-extrusion", "layout_symbol", "layout_raster", "layout_hillshade", "layout_background"],
    layout_background: {
        visibility: {
            type: "enum",
            values: {
                visible: {},
                none: {}
            },
            default: "visible",
            "property-type": "constant"
        }
    },
    layout_fill: {
        "fill-sort-key": {
            type: "number",
            expression: {
                interpolated: !1,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        visibility: {
            type: "enum",
            values: {
                visible: {},
                none: {}
            },
            default: "visible",
            "property-type": "constant"
        }
    },
    layout_circle: {
        "circle-sort-key": {
            type: "number",
            expression: {
                interpolated: !1,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        visibility: {
            type: "enum",
            values: {
                visible: {},
                none: {}
            },
            default: "visible",
            "property-type": "constant"
        }
    },
    layout_heatmap: {
        visibility: {
            type: "enum",
            values: {
                visible: {},
                none: {}
            },
            default: "visible",
            "property-type": "constant"
        }
    },
    "layout_fill-extrusion": {
        visibility: {
            type: "enum",
            values: {
                visible: {},
                none: {}
            },
            default: "visible",
            "property-type": "constant"
        }
    },
    layout_line: {
        "line-cap": {
            type: "enum",
            values: {
                butt: {},
                round: {},
                square: {}
            },
            default: "butt",
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "line-join": {
            type: "enum",
            values: {
                bevel: {},
                round: {},
                miter: {}
            },
            default: "miter",
            expression: {
                interpolated: !1,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "line-miter-limit": {
            type: "number",
            default: 2,
            requires: [{ "line-join": "miter" }],
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "line-round-limit": {
            type: "number",
            default: 1.05,
            requires: [{ "line-join": "round" }],
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "line-sort-key": {
            type: "number",
            expression: {
                interpolated: !1,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        visibility: {
            type: "enum",
            values: {
                visible: {},
                none: {}
            },
            default: "visible",
            "property-type": "constant"
        }
    },
    layout_symbol: {
        "symbol-placement": {
            type: "enum",
            values: {
                point: {},
                line: {},
                "line-center": {}
            },
            default: "point",
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "symbol-spacing": {
            type: "number",
            default: 250,
            minimum: 1,
            units: "pixels",
            requires: [{ "symbol-placement": "line" }],
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "symbol-avoid-edges": {
            type: "boolean",
            default: !1,
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "symbol-sort-key": {
            type: "number",
            expression: {
                interpolated: !1,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "symbol-z-order": {
            type: "enum",
            values: {
                auto: {},
                "viewport-y": {},
                source: {}
            },
            default: "auto",
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "icon-allow-overlap": {
            type: "boolean",
            default: !1,
            requires: ["icon-image", { "!": "icon-overlap" }],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "icon-overlap": {
            type: "enum",
            values: {
                never: {},
                always: {},
                cooperative: {}
            },
            requires: ["icon-image"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "icon-ignore-placement": {
            type: "boolean",
            default: !1,
            requires: ["icon-image"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "icon-optional": {
            type: "boolean",
            default: !1,
            requires: ["icon-image", "text-field"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "icon-rotation-alignment": {
            type: "enum",
            values: {
                map: {},
                viewport: {},
                auto: {}
            },
            default: "auto",
            requires: ["icon-image"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "icon-size": {
            type: "number",
            default: 1,
            minimum: 0,
            units: "factor of the original icon size",
            requires: ["icon-image"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "icon-text-fit": {
            type: "enum",
            values: {
                none: {},
                width: {},
                height: {},
                both: {}
            },
            default: "none",
            requires: ["icon-image", "text-field"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "icon-text-fit-padding": {
            type: "array",
            value: "number",
            length: 4,
            default: [0, 0, 0, 0],
            units: "pixels",
            requires: ["icon-image", "text-field", { "icon-text-fit": ["both", "width", "height"] }],
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "icon-image": {
            type: "resolvedImage",
            tokens: !0,
            expression: {
                interpolated: !1,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "icon-rotate": {
            type: "number",
            default: 0,
            period: 360,
            units: "degrees",
            requires: ["icon-image"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "icon-padding": {
            type: "padding",
            default: [2],
            units: "pixels",
            requires: ["icon-image"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "icon-keep-upright": {
            type: "boolean",
            default: !1,
            requires: ["icon-image", { "icon-rotation-alignment": "map" }, { "symbol-placement": ["line", "line-center"] }],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "icon-offset": {
            type: "array",
            value: "number",
            length: 2,
            default: [0, 0],
            requires: ["icon-image"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "icon-anchor": {
            type: "enum",
            values: {
                center: {},
                left: {},
                right: {},
                top: {},
                bottom: {},
                "top-left": {},
                "top-right": {},
                "bottom-left": {},
                "bottom-right": {}
            },
            default: "center",
            requires: ["icon-image"],
            expression: {
                interpolated: !1,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "icon-pitch-alignment": {
            type: "enum",
            values: {
                map: {},
                viewport: {},
                auto: {}
            },
            default: "auto",
            requires: ["icon-image"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "text-pitch-alignment": {
            type: "enum",
            values: {
                map: {},
                viewport: {},
                auto: {}
            },
            default: "auto",
            requires: ["text-field"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "text-rotation-alignment": {
            type: "enum",
            values: {
                map: {},
                viewport: {},
                "viewport-glyph": {},
                auto: {}
            },
            default: "auto",
            requires: ["text-field"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "text-field": {
            type: "formatted",
            default: "",
            tokens: !0,
            expression: {
                interpolated: !1,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "text-font": {
            type: "array",
            value: "string",
            default: ["Open Sans Regular", "Arial Unicode MS Regular"],
            requires: ["text-field"],
            expression: {
                interpolated: !1,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "text-size": {
            type: "number",
            default: 16,
            minimum: 0,
            units: "pixels",
            requires: ["text-field"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "text-max-width": {
            type: "number",
            default: 10,
            minimum: 0,
            units: "ems",
            requires: ["text-field"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "text-line-height": {
            type: "number",
            default: 1.2,
            units: "ems",
            requires: ["text-field"],
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "text-letter-spacing": {
            type: "number",
            default: 0,
            units: "ems",
            requires: ["text-field"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "text-justify": {
            type: "enum",
            values: {
                auto: {},
                left: {},
                center: {},
                right: {}
            },
            default: "center",
            requires: ["text-field"],
            expression: {
                interpolated: !1,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "text-radial-offset": {
            type: "number",
            units: "ems",
            default: 0,
            requires: ["text-field"],
            "property-type": "data-driven",
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature"]
            }
        },
        "text-variable-anchor": {
            type: "array",
            value: "enum",
            values: {
                center: {},
                left: {},
                right: {},
                top: {},
                bottom: {},
                "top-left": {},
                "top-right": {},
                "bottom-left": {},
                "bottom-right": {}
            },
            requires: ["text-field", { "symbol-placement": ["point"] }],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "text-variable-anchor-offset": {
            type: "variableAnchorOffsetCollection",
            requires: ["text-field", { "symbol-placement": ["point"] }],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "text-anchor": {
            type: "enum",
            values: {
                center: {},
                left: {},
                right: {},
                top: {},
                bottom: {},
                "top-left": {},
                "top-right": {},
                "bottom-left": {},
                "bottom-right": {}
            },
            default: "center",
            requires: ["text-field", { "!": "text-variable-anchor" }],
            expression: {
                interpolated: !1,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "text-max-angle": {
            type: "number",
            default: 45,
            units: "degrees",
            requires: ["text-field", { "symbol-placement": ["line", "line-center"] }],
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "text-writing-mode": {
            type: "array",
            value: "enum",
            values: {
                horizontal: {},
                vertical: {}
            },
            requires: ["text-field", { "symbol-placement": ["point"] }],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "text-rotate": {
            type: "number",
            default: 0,
            period: 360,
            units: "degrees",
            requires: ["text-field"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "text-padding": {
            type: "number",
            default: 2,
            minimum: 0,
            units: "pixels",
            requires: ["text-field"],
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "text-keep-upright": {
            type: "boolean",
            default: !0,
            requires: ["text-field", { "text-rotation-alignment": "map" }, { "symbol-placement": ["line", "line-center"] }],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "text-transform": {
            type: "enum",
            values: {
                none: {},
                uppercase: {},
                lowercase: {}
            },
            default: "none",
            requires: ["text-field"],
            expression: {
                interpolated: !1,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "text-offset": {
            type: "array",
            value: "number",
            units: "ems",
            length: 2,
            default: [0, 0],
            requires: ["text-field", { "!": "text-radial-offset" }],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature"]
            },
            "property-type": "data-driven"
        },
        "text-allow-overlap": {
            type: "boolean",
            default: !1,
            requires: ["text-field", { "!": "text-overlap" }],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "text-overlap": {
            type: "enum",
            values: {
                never: {},
                always: {},
                cooperative: {}
            },
            requires: ["text-field"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "text-ignore-placement": {
            type: "boolean",
            default: !1,
            requires: ["text-field"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "text-optional": {
            type: "boolean",
            default: !1,
            requires: ["text-field", "icon-image"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        visibility: {
            type: "enum",
            values: {
                visible: {},
                none: {}
            },
            default: "visible",
            "property-type": "constant"
        }
    },
    layout_raster: {
        visibility: {
            type: "enum",
            values: {
                visible: {},
                none: {}
            },
            default: "visible",
            "property-type": "constant"
        }
    },
    layout_hillshade: {
        visibility: {
            type: "enum",
            values: {
                visible: {},
                none: {}
            },
            default: "visible",
            "property-type": "constant"
        }
    },
    filter: {
        type: "array",
        value: "*"
    },
    filter_operator: {
        type: "enum",
        values: {
            "==": {},
            "!=": {},
            ">": {},
            ">=": {},
            "<": {},
            "<=": {},
            in: {},
            "!in": {},
            all: {},
            any: {},
            none: {},
            has: {},
            "!has": {}
        }
    },
    geometry_type: {
        type: "enum",
        values: {
            Point: {},
            LineString: {},
            Polygon: {}
        }
    },
    function: {
        expression: { type: "expression" },
        stops: {
            type: "array",
            value: "function_stop"
        },
        base: {
            type: "number",
            default: 1,
            minimum: 0
        },
        property: {
            type: "string",
            default: "$zoom"
        },
        type: {
            type: "enum",
            values: {
                identity: {},
                exponential: {},
                interval: {},
                categorical: {}
            },
            default: "exponential"
        },
        colorSpace: {
            type: "enum",
            values: {
                rgb: {},
                lab: {},
                hcl: {}
            },
            default: "rgb"
        },
        default: {
            type: "*",
            required: !1
        }
    },
    function_stop: {
        type: "array",
        minimum: 0,
        maximum: 24,
        value: ["number", "color"],
        length: 2
    },
    expression: {
        type: "array",
        value: "*",
        minimum: 1
    },
    light: {
        anchor: {
            type: "enum",
            default: "viewport",
            values: {
                map: {},
                viewport: {}
            },
            "property-type": "data-constant",
            transition: !1,
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            }
        },
        position: {
            type: "array",
            default: [1.15, 210, 30],
            length: 3,
            value: "number",
            "property-type": "data-constant",
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            }
        },
        color: {
            type: "color",
            "property-type": "data-constant",
            default: "#ffffff",
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            transition: !0
        },
        intensity: {
            type: "number",
            "property-type": "data-constant",
            default: 0.5,
            minimum: 0,
            maximum: 1,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            transition: !0
        }
    },
    sky: {
        "sky-color": {
            type: "color",
            "property-type": "data-constant",
            default: "#88C6FC",
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            transition: !0
        },
        "horizon-color": {
            type: "color",
            "property-type": "data-constant",
            default: "#ffffff",
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            transition: !0
        },
        "fog-color": {
            type: "color",
            "property-type": "data-constant",
            default: "#ffffff",
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            transition: !0
        },
        "fog-ground-blend": {
            type: "number",
            "property-type": "data-constant",
            default: 0.5,
            minimum: 0,
            maximum: 1,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            transition: !0
        },
        "horizon-fog-blend": {
            type: "number",
            "property-type": "data-constant",
            default: 0.8,
            minimum: 0,
            maximum: 1,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            transition: !0
        },
        "sky-horizon-blend": {
            type: "number",
            "property-type": "data-constant",
            default: 0.8,
            minimum: 0,
            maximum: 1,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            transition: !0
        },
        "atmosphere-blend": {
            type: "number",
            "property-type": "data-constant",
            default: 0.8,
            minimum: 0,
            maximum: 1,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            transition: !0
        }
    },
    terrain: {
        source: {
            type: "string",
            required: !0
        },
        exaggeration: {
            type: "number",
            minimum: 0,
            default: 1
        }
    },
    projection: {
        type: {
            type: "enum",
            default: "mercator",
            values: {
                mercator: {},
                globe: {}
            }
        }
    },
    paint: ["paint_fill", "paint_line", "paint_circle", "paint_heatmap", "paint_fill-extrusion", "paint_symbol", "paint_raster", "paint_hillshade", "paint_background"],
    paint_fill: {
        "fill-antialias": {
            type: "boolean",
            default: !0,
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "fill-opacity": {
            type: "number",
            default: 1,
            minimum: 0,
            maximum: 1,
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "fill-color": {
            type: "color",
            default: "#000000",
            transition: !0,
            requires: [{ "!": "fill-pattern" }],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "fill-outline-color": {
            type: "color",
            transition: !0,
            requires: [{ "!": "fill-pattern" }, { "fill-antialias": !0 }],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "fill-translate": {
            type: "array",
            value: "number",
            length: 2,
            default: [0, 0],
            transition: !0,
            units: "pixels",
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "fill-translate-anchor": {
            type: "enum",
            values: {
                map: {},
                viewport: {}
            },
            default: "map",
            requires: ["fill-translate"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "fill-pattern": {
            type: "resolvedImage",
            transition: !0,
            expression: {
                interpolated: !1,
                parameters: ["zoom", "feature"]
            },
            "property-type": "cross-faded-data-driven"
        }
    },
    "paint_fill-extrusion": {
        "fill-extrusion-opacity": {
            type: "number",
            default: 1,
            minimum: 0,
            maximum: 1,
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "fill-extrusion-color": {
            type: "color",
            default: "#000000",
            transition: !0,
            requires: [{ "!": "fill-extrusion-pattern" }],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "fill-extrusion-translate": {
            type: "array",
            value: "number",
            length: 2,
            default: [0, 0],
            transition: !0,
            units: "pixels",
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "fill-extrusion-translate-anchor": {
            type: "enum",
            values: {
                map: {},
                viewport: {}
            },
            default: "map",
            requires: ["fill-extrusion-translate"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "fill-extrusion-pattern": {
            type: "resolvedImage",
            transition: !0,
            expression: {
                interpolated: !1,
                parameters: ["zoom", "feature"]
            },
            "property-type": "cross-faded-data-driven"
        },
        "fill-extrusion-height": {
            type: "number",
            default: 0,
            minimum: 0,
            units: "meters",
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "fill-extrusion-base": {
            type: "number",
            default: 0,
            minimum: 0,
            units: "meters",
            transition: !0,
            requires: ["fill-extrusion-height"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "fill-extrusion-vertical-gradient": {
            type: "boolean",
            default: !0,
            transition: !1,
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        }
    },
    paint_line: {
        "line-opacity": {
            type: "number",
            default: 1,
            minimum: 0,
            maximum: 1,
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "line-color": {
            type: "color",
            default: "#000000",
            transition: !0,
            requires: [{ "!": "line-pattern" }],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "line-translate": {
            type: "array",
            value: "number",
            length: 2,
            default: [0, 0],
            transition: !0,
            units: "pixels",
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "line-translate-anchor": {
            type: "enum",
            values: {
                map: {},
                viewport: {}
            },
            default: "map",
            requires: ["line-translate"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "line-width": {
            type: "number",
            default: 1,
            minimum: 0,
            transition: !0,
            units: "pixels",
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "line-gap-width": {
            type: "number",
            default: 0,
            minimum: 0,
            transition: !0,
            units: "pixels",
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "line-offset": {
            type: "number",
            default: 0,
            transition: !0,
            units: "pixels",
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "line-blur": {
            type: "number",
            default: 0,
            minimum: 0,
            transition: !0,
            units: "pixels",
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "line-dasharray": {
            type: "array",
            value: "number",
            minimum: 0,
            transition: !0,
            units: "line widths",
            requires: [{ "!": "line-pattern" }],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "cross-faded"
        },
        "line-pattern": {
            type: "resolvedImage",
            transition: !0,
            expression: {
                interpolated: !1,
                parameters: ["zoom", "feature"]
            },
            "property-type": "cross-faded-data-driven"
        },
        "line-gradient": {
            type: "color",
            transition: !1,
            requires: [{ "!": "line-dasharray" }, { "!": "line-pattern" }, { source: "geojson", has: { lineMetrics: !0 } }],
            expression: {
                interpolated: !0,
                parameters: ["line-progress"]
            },
            "property-type": "color-ramp"
        }
    },
    paint_circle: {
        "circle-radius": {
            type: "number",
            default: 5,
            minimum: 0,
            transition: !0,
            units: "pixels",
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "circle-color": {
            type: "color",
            default: "#000000",
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "circle-blur": {
            type: "number",
            default: 0,
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "circle-opacity": {
            type: "number",
            default: 1,
            minimum: 0,
            maximum: 1,
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "circle-translate": {
            type: "array",
            value: "number",
            length: 2,
            default: [0, 0],
            transition: !0,
            units: "pixels",
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "circle-translate-anchor": {
            type: "enum",
            values: {
                map: {},
                viewport: {}
            },
            default: "map",
            requires: ["circle-translate"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "circle-pitch-scale": {
            type: "enum",
            values: {
                map: {},
                viewport: {}
            },
            default: "map",
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "circle-pitch-alignment": {
            type: "enum",
            values: {
                map: {},
                viewport: {}
            },
            default: "viewport",
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "circle-stroke-width": {
            type: "number",
            default: 0,
            minimum: 0,
            transition: !0,
            units: "pixels",
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "circle-stroke-color": {
            type: "color",
            default: "#000000",
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "circle-stroke-opacity": {
            type: "number",
            default: 1,
            minimum: 0,
            maximum: 1,
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        }
    },
    paint_heatmap: {
        "heatmap-radius": {
            type: "number",
            default: 30,
            minimum: 1,
            transition: !0,
            units: "pixels",
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "heatmap-weight": {
            type: "number",
            default: 1,
            minimum: 0,
            transition: !1,
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "heatmap-intensity": {
            type: "number",
            default: 1,
            minimum: 0,
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "heatmap-color": {
            type: "color",
            default: ["interpolate", ["linear"],
                ["heatmap-density"],
                0,
                "rgba(0, 0, 255, 0)",
                0.1,
                "royalblue",
                0.3,
                "cyan",
                0.5,
                "lime",
                0.7,
                "yellow",
                1,
                "red"],
            transition: !1,
            expression: {
                interpolated: !0,
                parameters: ["heatmap-density"]
            },
            "property-type": "color-ramp"
        },
        "heatmap-opacity": {
            type: "number",
            default: 1,
            minimum: 0,
            maximum: 1,
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        }
    },
    paint_symbol: {
        "icon-opacity": {
            type: "number",
            default: 1,
            minimum: 0,
            maximum: 1,
            transition: !0,
            requires: ["icon-image"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "icon-color": {
            type: "color",
            default: "#000000",
            transition: !0,
            requires: ["icon-image"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "icon-halo-color": {
            type: "color",
            default: "rgba(0, 0, 0, 0)",
            transition: !0,
            requires: ["icon-image"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "icon-halo-width": {
            type: "number",
            default: 0,
            minimum: 0,
            transition: !0,
            units: "pixels",
            requires: ["icon-image"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "icon-halo-blur": {
            type: "number",
            default: 0,
            minimum: 0,
            transition: !0,
            units: "pixels",
            requires: ["icon-image"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "icon-translate": {
            type: "array",
            value: "number",
            length: 2,
            default: [0, 0],
            transition: !0,
            units: "pixels",
            requires: ["icon-image"],
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "icon-translate-anchor": {
            type: "enum",
            values: {
                map: {},
                viewport: {}
            },
            default: "map",
            requires: ["icon-image", "icon-translate"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "text-opacity": {
            type: "number",
            default: 1,
            minimum: 0,
            maximum: 1,
            transition: !0,
            requires: ["text-field"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "text-color": {
            type: "color",
            default: "#000000",
            transition: !0,
            overridable: !0,
            requires: ["text-field"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "text-halo-color": {
            type: "color",
            default: "rgba(0, 0, 0, 0)",
            transition: !0,
            requires: ["text-field"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "text-halo-width": {
            type: "number",
            default: 0,
            minimum: 0,
            transition: !0,
            units: "pixels",
            requires: ["text-field"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "text-halo-blur": {
            type: "number",
            default: 0,
            minimum: 0,
            transition: !0,
            units: "pixels",
            requires: ["text-field"],
            expression: {
                interpolated: !0,
                parameters: ["zoom", "feature", "feature-state"]
            },
            "property-type": "data-driven"
        },
        "text-translate": {
            type: "array",
            value: "number",
            length: 2,
            default: [0, 0],
            transition: !0,
            units: "pixels",
            requires: ["text-field"],
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "text-translate-anchor": {
            type: "enum",
            values: {
                map: {},
                viewport: {}
            },
            default: "map",
            requires: ["text-field", "text-translate"],
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        }
    },
    paint_raster: {
        "raster-opacity": {
            type: "number",
            default: 1,
            minimum: 0,
            maximum: 1,
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "raster-hue-rotate": {
            type: "number",
            default: 0,
            period: 360,
            transition: !0,
            units: "degrees",
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "raster-brightness-min": {
            type: "number",
            default: 0,
            minimum: 0,
            maximum: 1,
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "raster-brightness-max": {
            type: "number",
            default: 1,
            minimum: 0,
            maximum: 1,
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "raster-saturation": {
            type: "number",
            default: 0,
            minimum: -1,
            maximum: 1,
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "raster-contrast": {
            type: "number",
            default: 0,
            minimum: -1,
            maximum: 1,
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "raster-resampling": {
            type: "enum",
            values: {
                linear: {},
                nearest: {}
            },
            default: "linear",
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "raster-fade-duration": {
            type: "number",
            default: 300,
            minimum: 0,
            transition: !1,
            units: "milliseconds",
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        }
    },
    paint_hillshade: {
        "hillshade-illumination-direction": {
            type: "number",
            default: 335,
            minimum: 0,
            maximum: 359,
            transition: !1,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "hillshade-illumination-anchor": {
            type: "enum",
            values: {
                map: {},
                viewport: {}
            },
            default: "viewport",
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "hillshade-exaggeration": {
            type: "number",
            default: 0.5,
            minimum: 0,
            maximum: 1,
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "hillshade-shadow-color": {
            type: "color",
            default: "#000000",
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "hillshade-highlight-color": {
            type: "color",
            default: "#FFFFFF",
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "hillshade-accent-color": {
            type: "color",
            default: "#000000",
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        }
    },
    paint_background: {
        "background-color": {
            type: "color",
            default: "#000000",
            transition: !0,
            requires: [{ "!": "background-pattern" }],
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        },
        "background-pattern": {
            type: "resolvedImage",
            transition: !0,
            expression: {
                interpolated: !1,
                parameters: ["zoom"]
            },
            "property-type": "cross-faded"
        },
        "background-opacity": {
            type: "number",
            default: 1,
            minimum: 0,
            maximum: 1,
            transition: !0,
            expression: {
                interpolated: !0,
                parameters: ["zoom"]
            },
            "property-type": "data-constant"
        }
    },
    transition: {
        duration: {
            type: "number",
            default: 300,
            minimum: 0,
            units: "milliseconds"
        },
        delay: {
            type: "number",
            default: 0,
            minimum: 0,
            units: "milliseconds"
        }
    },
    "property-type": {
        "data-driven": { type: "property-type" },
        "cross-faded": { type: "property-type" },
        "cross-faded-data-driven": { type: "property-type" },
        "color-ramp": { type: "property-type" },
        "data-constant": { type: "property-type" },
        constant: { type: "property-type" }
    },
    promoteId: { "*": { type: "string" } }
};
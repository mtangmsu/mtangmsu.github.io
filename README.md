# Fort Ancient Solar Studio

Double-click `start.cmd` (Node.js required), then open http://localhost:8080. Keep the server window open. Stop it with Ctrl+C. Alternatively run `node server.cjs` in this folder. Set PORT to select another port.

The included `assets/bldg (1).glb` is copied from the user's Downloads folder. Open or drop another self-contained GLB to replace it locally. Models are traversed recursively, centered, grounded, and proportionally normalized for display without changing the source file. Y is up; the model's −Z direction is its reference north. The north-bearing slider rotates that direction clockwise relative to fixed geographic north. Embedded model lights are disabled to provide consistent sunlight. All mesh material sides and shadow sides are double-sided. Existing material colors and transparency are preserved.

The study location is approximately 39.407 N, −84.090 E, near Fort Ancient, Ohio. Time is Eastern civil time with automatic daylight saving, independent of your computer timezone. SunCalc calculates altitude and azimuth; azimuth is shown clockwise from north. Direct sun turns off below the horizon. Presets are the 2026 equinox/solstice dates; arbitrary dates are also supported. This is a visual solar study, not an irradiance, energy, or code-compliance calculation. Near-horizon shadows can extend beyond the finite ground plane and shadow map.

Static deployment: copy `index.html`, `style.css`, `app.js`, `solar.js`, `assets/`, and `vendor/` to GitHub Pages. No build or server backend is required. All dependencies are bundled locally: Three.js 0.180.0 and SunCalc 1.9.0, with licenses in vendor. Draco, Meshopt, and KTX2 decoders are included. Unusual vendor GLTF extensions may still be unsupported; external companion resources should be embedded into GLB before import.

References: https://threejs.org/docs/ and https://github.com/mourner/suncalc

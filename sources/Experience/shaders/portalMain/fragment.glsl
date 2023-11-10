#define M_PI 3.1415926535897932384626433832795

varying vec2 vUv;

void main() {
  vec2 centeredUv = vUv - 0.5;
  float distanceToCenter = length(centeredUv);
  float radialRatio = atan(centeredUv.y, centeredUv.x) / (M_PI * 2.0) + 0.5;
  gl_FragColor = vec4(radialRatio, radialRatio, radialRatio, 1.0);
}
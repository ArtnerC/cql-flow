window.BENCHMARK_DATA = {
  "lastUpdate": 1763868643741,
  "repoUrl": "https://github.com/ArtnerC/cql-flow",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "198982749+Copilot@users.noreply.github.com",
            "name": "Copilot",
            "username": "Copilot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3fbce38b23df71e298d821406af817725774bf9e",
          "message": "Fix CI benchmark storage permissions - add write access to test-performance job (#7)\n\n* Initial plan\n\n* Add write permissions to CI test-performance job for benchmark storage\n\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>",
          "timestamp": "2025-08-21T00:49:16-04:00",
          "tree_id": "b3d8883dc9fa5827702bf1b07cf7beb6b620f262",
          "url": "https://github.com/ArtnerC/cql-flow/commit/3fbce38b23df71e298d821406af817725774bf9e"
        },
        "date": 1755751809860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25559.43932497904,
            "unit": "iter/sec",
            "range": "stddev: 0.00001684249435458306",
            "extra": "mean: 39.12448889372576 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3578.688356237685,
            "unit": "iter/sec",
            "range": "stddev: 0.00034060842953538404",
            "extra": "mean: 279.4319874925659 usec\nrounds: 3198"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2059.977439891395,
            "unit": "iter/sec",
            "range": "stddev: 0.00043521955140865337",
            "extra": "mean: 485.4422095286254 usec\nrounds: 1637"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8139.036447176905,
            "unit": "iter/sec",
            "range": "stddev: 0.000007145117047531252",
            "extra": "mean: 122.86466665803648 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6004.049628883171,
            "unit": "iter/sec",
            "range": "stddev: 0.000014324784649610589",
            "extra": "mean: 166.55425284784206 usec\nrounds: 3599"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30332.234918772872,
            "unit": "iter/sec",
            "range": "stddev: 0.000007852163805217288",
            "extra": "mean: 32.96822679495641 usec\nrounds: 14458"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13367.421059013071,
            "unit": "iter/sec",
            "range": "stddev: 0.000010676872485550811",
            "extra": "mean: 74.80874550037035 usec\nrounds: 8723"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3866.3162077550237,
            "unit": "iter/sec",
            "range": "stddev: 0.000019480731701563664",
            "extra": "mean: 258.6441321054415 usec\nrounds: 2498"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2036.8051673194286,
            "unit": "iter/sec",
            "range": "stddev: 0.000029835984276725288",
            "extra": "mean: 490.9649759559804 usec\nrounds: 1830"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1053.3380842974645,
            "unit": "iter/sec",
            "range": "stddev: 0.000026741564339105026",
            "extra": "mean: 949.3628065930617 usec\nrounds: 910"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32978.463964202696,
            "unit": "iter/sec",
            "range": "stddev: 0.000010283299467151196",
            "extra": "mean: 30.32281919150253 usec\nrounds: 15851"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24396.068182720395,
            "unit": "iter/sec",
            "range": "stddev: 0.000010218444692657317",
            "extra": "mean: 40.99021172224361 usec\nrounds: 13291"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18900.59092811173,
            "unit": "iter/sec",
            "range": "stddev: 0.0001761122371412207",
            "extra": "mean: 52.90839867406755 usec\nrounds: 11616"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 14742.3651016865,
            "unit": "iter/sec",
            "range": "stddev: 0.00001536190306010058",
            "extra": "mean: 67.8317212402779 usec\nrounds: 9962"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 643.6055857336025,
            "unit": "iter/sec",
            "range": "stddev: 0.00008032302485676215",
            "extra": "mean: 1.5537466146446937 msec\nrounds: 519"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Copilot",
            "username": "Copilot",
            "email": "198982749+Copilot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3fbce38b23df71e298d821406af817725774bf9e",
          "message": "Fix CI benchmark storage permissions - add write access to test-performance job (#7)\n\n* Initial plan\n\n* Add write permissions to CI test-performance job for benchmark storage\n\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>",
          "timestamp": "2025-08-21T04:49:16Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/3fbce38b23df71e298d821406af817725774bf9e"
        },
        "date": 1755832772512,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24901.508741922975,
            "unit": "iter/sec",
            "range": "stddev: 0.000019617763086261486",
            "extra": "mean: 40.158209302251976 usec\nrounds: 43"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3558.553937379231,
            "unit": "iter/sec",
            "range": "stddev: 0.00030860160805567643",
            "extra": "mean: 281.01302315413835 usec\nrounds: 3196"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2032.1842518463366,
            "unit": "iter/sec",
            "range": "stddev: 0.0006927963605644302",
            "extra": "mean: 492.0813647145687 usec\nrounds: 1434"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8055.979389534938,
            "unit": "iter/sec",
            "range": "stddev: 0.000006009683278998272",
            "extra": "mean: 124.13140000073025 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5984.343364389955,
            "unit": "iter/sec",
            "range": "stddev: 0.000013732957577817933",
            "extra": "mean: 167.1027110427077 usec\nrounds: 3568"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30296.796500561268,
            "unit": "iter/sec",
            "range": "stddev: 0.000007889336334748625",
            "extra": "mean: 33.006790007698484 usec\nrounds: 14391"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13632.82380739959,
            "unit": "iter/sec",
            "range": "stddev: 0.000010889702124149216",
            "extra": "mean: 73.35237468977061 usec\nrounds: 7254"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3882.46377828455,
            "unit": "iter/sec",
            "range": "stddev: 0.000015155678327154686",
            "extra": "mean: 257.5684042677266 usec\nrounds: 3374"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2032.4976832161115,
            "unit": "iter/sec",
            "range": "stddev: 0.0000257991421289632",
            "extra": "mean: 492.00548087103135 usec\nrounds: 1516"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1034.1960709203604,
            "unit": "iter/sec",
            "range": "stddev: 0.00007202106593867484",
            "extra": "mean: 966.9346346578861 usec\nrounds: 906"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 31987.041583739072,
            "unit": "iter/sec",
            "range": "stddev: 0.000011157649408924244",
            "extra": "mean: 31.2626598299844 usec\nrounds: 16236"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23806.67342653616,
            "unit": "iter/sec",
            "range": "stddev: 0.000010316339028904127",
            "extra": "mean: 42.00502867760382 usec\nrounds: 13181"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18665.11384360187,
            "unit": "iter/sec",
            "range": "stddev: 0.0002546499870133932",
            "extra": "mean: 53.57588538592201 usec\nrounds: 9135"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15520.307956380311,
            "unit": "iter/sec",
            "range": "stddev: 0.00001109709719508777",
            "extra": "mean: 64.43171120125265 usec\nrounds: 9865"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 678.9161160242072,
            "unit": "iter/sec",
            "range": "stddev: 0.00014005811374306342",
            "extra": "mean: 1.4729360172742525 msec\nrounds: 521"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Copilot",
            "username": "Copilot",
            "email": "198982749+Copilot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3fbce38b23df71e298d821406af817725774bf9e",
          "message": "Fix CI benchmark storage permissions - add write access to test-performance job (#7)\n\n* Initial plan\n\n* Add write permissions to CI test-performance job for benchmark storage\n\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>",
          "timestamp": "2025-08-21T04:49:16Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/3fbce38b23df71e298d821406af817725774bf9e"
        },
        "date": 1755919030754,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25006.635283472213,
            "unit": "iter/sec",
            "range": "stddev: 0.000021821603588798788",
            "extra": "mean: 39.989386363423954 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3536.549967158969,
            "unit": "iter/sec",
            "range": "stddev: 0.0003411078092346946",
            "extra": "mean: 282.76145092991123 usec\nrounds: 3118"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2018.4992094915656,
            "unit": "iter/sec",
            "range": "stddev: 0.0005885691969119044",
            "extra": "mean: 495.4175831715522 usec\nrounds: 1545"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8062.87754422587,
            "unit": "iter/sec",
            "range": "stddev: 0.000010851528270458282",
            "extra": "mean: 124.02520000023287 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5979.528886764034,
            "unit": "iter/sec",
            "range": "stddev: 0.000013810979457858909",
            "extra": "mean: 167.23725546565157 usec\nrounds: 3339"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30718.62430396033,
            "unit": "iter/sec",
            "range": "stddev: 0.000007638928535437367",
            "extra": "mean: 32.553541138594454 usec\nrounds: 10574"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13488.646031109025,
            "unit": "iter/sec",
            "range": "stddev: 0.000011305251895782256",
            "extra": "mean: 74.13642538277661 usec\nrounds: 6989"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3852.45581210815,
            "unit": "iter/sec",
            "range": "stddev: 0.000013454250756250791",
            "extra": "mean: 259.5746839865186 usec\nrounds: 3291"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2026.1041040576902,
            "unit": "iter/sec",
            "range": "stddev: 0.00002257768805659701",
            "extra": "mean: 493.558054592207 usec\nrounds: 1557"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1036.369382701222,
            "unit": "iter/sec",
            "range": "stddev: 0.00005006865118823181",
            "extra": "mean: 964.9069305710017 usec\nrounds: 893"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32855.81650897962,
            "unit": "iter/sec",
            "range": "stddev: 0.000010358794699083727",
            "extra": "mean: 30.436011222752487 usec\nrounds: 15326"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23564.291056636685,
            "unit": "iter/sec",
            "range": "stddev: 0.000011981868351090686",
            "extra": "mean: 42.43709253108883 usec\nrounds: 12947"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18689.76205808075,
            "unit": "iter/sec",
            "range": "stddev: 0.00019010671991922864",
            "extra": "mean: 53.505229060293885 usec\nrounds: 11748"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15130.952017627164,
            "unit": "iter/sec",
            "range": "stddev: 0.00001196396889927296",
            "extra": "mean: 66.08969474194527 usec\nrounds: 10270"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 657.6593272618195,
            "unit": "iter/sec",
            "range": "stddev: 0.0004112801280070543",
            "extra": "mean: 1.5205440849801737 msec\nrounds: 506"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Copilot",
            "username": "Copilot",
            "email": "198982749+Copilot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3fbce38b23df71e298d821406af817725774bf9e",
          "message": "Fix CI benchmark storage permissions - add write access to test-performance job (#7)\n\n* Initial plan\n\n* Add write permissions to CI test-performance job for benchmark storage\n\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>",
          "timestamp": "2025-08-21T04:49:16Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/3fbce38b23df71e298d821406af817725774bf9e"
        },
        "date": 1756005949123,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25514.31182778666,
            "unit": "iter/sec",
            "range": "stddev: 0.00001776758844832577",
            "extra": "mean: 39.193688889187996 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3472.743756989262,
            "unit": "iter/sec",
            "range": "stddev: 0.0003291187346176344",
            "extra": "mean: 287.9567483167726 usec\nrounds: 3119"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1969.9932310470904,
            "unit": "iter/sec",
            "range": "stddev: 0.0005145844250675054",
            "extra": "mean: 507.61595737487903 usec\nrounds: 1478"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7889.011080892146,
            "unit": "iter/sec",
            "range": "stddev: 0.000010046883540118586",
            "extra": "mean: 126.75860000020597 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5808.389053819048,
            "unit": "iter/sec",
            "range": "stddev: 0.000021405387535628753",
            "extra": "mean: 172.16477593602212 usec\nrounds: 3499"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 29974.5004617712,
            "unit": "iter/sec",
            "range": "stddev: 0.000008004899372870611",
            "extra": "mean: 33.361690256535795 usec\nrounds: 14851"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13219.925269292018,
            "unit": "iter/sec",
            "range": "stddev: 0.00001119573308807875",
            "extra": "mean: 75.64339280516629 usec\nrounds: 7561"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3798.5541595521618,
            "unit": "iter/sec",
            "range": "stddev: 0.000015899974276307923",
            "extra": "mean: 263.25806030310673 usec\nrounds: 3101"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1995.4340283207082,
            "unit": "iter/sec",
            "range": "stddev: 0.000015835380757894533",
            "extra": "mean: 501.14410489509754 usec\nrounds: 1859"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1028.2084497697228,
            "unit": "iter/sec",
            "range": "stddev: 0.000032226055236019615",
            "extra": "mean: 972.5654367302268 usec\nrounds: 893"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32226.311711373884,
            "unit": "iter/sec",
            "range": "stddev: 0.00001106893535604772",
            "extra": "mean: 31.03054451146087 usec\nrounds: 15423"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24068.55276727895,
            "unit": "iter/sec",
            "range": "stddev: 0.000010376094489170901",
            "extra": "mean: 41.54799042838562 usec\nrounds: 12955"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18938.62481650867,
            "unit": "iter/sec",
            "range": "stddev: 0.00018834969918845703",
            "extra": "mean: 52.802144278622954 usec\nrounds: 10653"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15417.517568233705,
            "unit": "iter/sec",
            "range": "stddev: 0.000010674922732018015",
            "extra": "mean: 64.86128493606537 usec\nrounds: 8995"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 686.6785769507911,
            "unit": "iter/sec",
            "range": "stddev: 0.0000558781881290252",
            "extra": "mean: 1.4562854202333186 msec\nrounds: 514"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Copilot",
            "username": "Copilot",
            "email": "198982749+Copilot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3fbce38b23df71e298d821406af817725774bf9e",
          "message": "Fix CI benchmark storage permissions - add write access to test-performance job (#7)\n\n* Initial plan\n\n* Add write permissions to CI test-performance job for benchmark storage\n\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>",
          "timestamp": "2025-08-21T04:49:16Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/3fbce38b23df71e298d821406af817725774bf9e"
        },
        "date": 1756092221055,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24186.10991638597,
            "unit": "iter/sec",
            "range": "stddev: 0.000023212213223730715",
            "extra": "mean: 41.3460454557227 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3383.715410569246,
            "unit": "iter/sec",
            "range": "stddev: 0.00030916261492567964",
            "extra": "mean: 295.5331281337779 usec\nrounds: 2872"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1950.0300782307895,
            "unit": "iter/sec",
            "range": "stddev: 0.00041964875257328364",
            "extra": "mean: 512.8126028226567 usec\nrounds: 1488"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8018.54314827661,
            "unit": "iter/sec",
            "range": "stddev: 0.000013035023901248378",
            "extra": "mean: 124.71093333393429 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5726.799306252279,
            "unit": "iter/sec",
            "range": "stddev: 0.000013488070656052093",
            "extra": "mean: 174.61760863668508 usec\nrounds: 3682"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 29555.817060942674,
            "unit": "iter/sec",
            "range": "stddev: 0.0000078259302747801",
            "extra": "mean: 33.834287102875486 usec\nrounds: 14918"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 12977.015600007164,
            "unit": "iter/sec",
            "range": "stddev: 0.00001094202275040312",
            "extra": "mean: 77.05932017215484 usec\nrounds: 6965"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3714.072038416969,
            "unit": "iter/sec",
            "range": "stddev: 0.00001566709027781536",
            "extra": "mean: 269.24625846143397 usec\nrounds: 3250"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1951.2299815665226,
            "unit": "iter/sec",
            "range": "stddev: 0.000020028179590054842",
            "extra": "mean: 512.4972501689225 usec\nrounds: 1479"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1002.6405069543557,
            "unit": "iter/sec",
            "range": "stddev: 0.000024848027391737356",
            "extra": "mean: 997.3664469607589 usec\nrounds: 839"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 31022.19380043261,
            "unit": "iter/sec",
            "range": "stddev: 0.00001141986895402886",
            "extra": "mean: 32.234986552951476 usec\nrounds: 12419"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23669.30075149926,
            "unit": "iter/sec",
            "range": "stddev: 0.000010229242160515928",
            "extra": "mean: 42.248818860297675 usec\nrounds: 13266"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18961.693785460873,
            "unit": "iter/sec",
            "range": "stddev: 0.00001089637045952066",
            "extra": "mean: 52.7379047101142 usec\nrounds: 11953"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 13863.398381378243,
            "unit": "iter/sec",
            "range": "stddev: 0.0002198076163055755",
            "extra": "mean: 72.13238576071159 usec\nrounds: 6447"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 677.4392493698704,
            "unit": "iter/sec",
            "range": "stddev: 0.00007551052977782037",
            "extra": "mean: 1.4761471245283826 msec\nrounds: 530"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Copilot",
            "username": "Copilot",
            "email": "198982749+Copilot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3fbce38b23df71e298d821406af817725774bf9e",
          "message": "Fix CI benchmark storage permissions - add write access to test-performance job (#7)\n\n* Initial plan\n\n* Add write permissions to CI test-performance job for benchmark storage\n\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>",
          "timestamp": "2025-08-21T04:49:16Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/3fbce38b23df71e298d821406af817725774bf9e"
        },
        "date": 1756178397315,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24374.584178048848,
            "unit": "iter/sec",
            "range": "stddev: 0.00001984742405725855",
            "extra": "mean: 41.02634090884617 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3522.1237300683897,
            "unit": "iter/sec",
            "range": "stddev: 0.00034681499707213073",
            "extra": "mean: 283.9196111888388 usec\nrounds: 2860"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2025.7662493220864,
            "unit": "iter/sec",
            "range": "stddev: 0.00045261985550644257",
            "extra": "mean: 493.64036958096494 usec\nrounds: 1361"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8032.532828951575,
            "unit": "iter/sec",
            "range": "stddev: 0.000008812691518232006",
            "extra": "mean: 124.49373333348981 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5957.458377771548,
            "unit": "iter/sec",
            "range": "stddev: 0.000012409156959924968",
            "extra": "mean: 167.8568168820444 usec\nrounds: 3637"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30630.76530164931,
            "unit": "iter/sec",
            "range": "stddev: 0.000007822862185562722",
            "extra": "mean: 32.64691528768807 usec\nrounds: 13174"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13469.516459154818,
            "unit": "iter/sec",
            "range": "stddev: 0.000011683432339867288",
            "extra": "mean: 74.24171484050049 usec\nrounds: 7210"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3852.881563779482,
            "unit": "iter/sec",
            "range": "stddev: 0.000013418977779226983",
            "extra": "mean: 259.5460004275477 usec\nrounds: 2339"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2027.2681565372427,
            "unit": "iter/sec",
            "range": "stddev: 0.000020574386661618142",
            "extra": "mean: 493.274654749222 usec\nrounds: 1874"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1038.4589633354062,
            "unit": "iter/sec",
            "range": "stddev: 0.000034931835519587275",
            "extra": "mean: 962.9653508773416 usec\nrounds: 912"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32711.445388740416,
            "unit": "iter/sec",
            "range": "stddev: 0.000010250687426395277",
            "extra": "mean: 30.570339773008293 usec\nrounds: 15684"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23974.093217193327,
            "unit": "iter/sec",
            "range": "stddev: 0.000010221702810050263",
            "extra": "mean: 41.71169232306301 usec\nrounds: 10030"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18757.66989075218,
            "unit": "iter/sec",
            "range": "stddev: 0.00019770129777678958",
            "extra": "mean: 53.311525675852494 usec\nrounds: 11431"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15530.140087592728,
            "unit": "iter/sec",
            "range": "stddev: 0.00001089842162698153",
            "extra": "mean: 64.39091948687029 usec\nrounds: 9899"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 682.9226883035782,
            "unit": "iter/sec",
            "range": "stddev: 0.000053304095678301616",
            "extra": "mean: 1.464294593117211 msec\nrounds: 494"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Copilot",
            "username": "Copilot",
            "email": "198982749+Copilot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3fbce38b23df71e298d821406af817725774bf9e",
          "message": "Fix CI benchmark storage permissions - add write access to test-performance job (#7)\n\n* Initial plan\n\n* Add write permissions to CI test-performance job for benchmark storage\n\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>",
          "timestamp": "2025-08-21T04:49:16Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/3fbce38b23df71e298d821406af817725774bf9e"
        },
        "date": 1756264635850,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 23549.668990478447,
            "unit": "iter/sec",
            "range": "stddev: 0.0000237698798049443",
            "extra": "mean: 42.46344186002435 usec\nrounds: 43"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3480.2832283707585,
            "unit": "iter/sec",
            "range": "stddev: 0.0005047450120208196",
            "extra": "mean: 287.3329365403789 usec\nrounds: 2931"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2038.9014311646895,
            "unit": "iter/sec",
            "range": "stddev: 0.0007179054565611182",
            "extra": "mean: 490.46019818072625 usec\nrounds: 1539"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7963.144444043617,
            "unit": "iter/sec",
            "range": "stddev: 0.000008718905074038441",
            "extra": "mean: 125.57853333277079 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5987.272013529188,
            "unit": "iter/sec",
            "range": "stddev: 0.00004092054883416506",
            "extra": "mean: 167.02097344839882 usec\nrounds: 3013"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30497.52856471692,
            "unit": "iter/sec",
            "range": "stddev: 0.000008138350800085063",
            "extra": "mean: 32.78954220431212 usec\nrounds: 12167"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13644.388912106811,
            "unit": "iter/sec",
            "range": "stddev: 0.000010713326617013885",
            "extra": "mean: 73.29020056828557 usec\nrounds: 7743"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3859.168292511319,
            "unit": "iter/sec",
            "range": "stddev: 0.000014251279875554416",
            "extra": "mean: 259.12319033624186 usec\nrounds: 3063"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2026.8359069940861,
            "unit": "iter/sec",
            "range": "stddev: 0.000023778384946245024",
            "extra": "mean: 493.3798520883012 usec\nrounds: 1724"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1041.465393549764,
            "unit": "iter/sec",
            "range": "stddev: 0.000030457885865342422",
            "extra": "mean: 960.1855291528872 usec\nrounds: 909"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32819.01280193586,
            "unit": "iter/sec",
            "range": "stddev: 0.000010211692440796509",
            "extra": "mean: 30.470142597982537 usec\nrounds: 11578"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24224.49612729103,
            "unit": "iter/sec",
            "range": "stddev: 0.000010190088604646541",
            "extra": "mean: 41.28052838520806 usec\nrounds: 9283"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19579.005301448164,
            "unit": "iter/sec",
            "range": "stddev: 0.000010882807525198736",
            "extra": "mean: 51.0751176887436 usec\nrounds: 8463"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 14710.55720779163,
            "unit": "iter/sec",
            "range": "stddev: 0.00019559160840597757",
            "extra": "mean: 67.97839034066892 usec\nrounds: 9835"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 662.4010352241978,
            "unit": "iter/sec",
            "range": "stddev: 0.00012157633497125266",
            "extra": "mean: 1.5096594763948967 msec\nrounds: 466"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Copilot",
            "username": "Copilot",
            "email": "198982749+Copilot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3fbce38b23df71e298d821406af817725774bf9e",
          "message": "Fix CI benchmark storage permissions - add write access to test-performance job (#7)\n\n* Initial plan\n\n* Add write permissions to CI test-performance job for benchmark storage\n\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>",
          "timestamp": "2025-08-21T04:49:16Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/3fbce38b23df71e298d821406af817725774bf9e"
        },
        "date": 1756351877991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25117.710724894434,
            "unit": "iter/sec",
            "range": "stddev: 0.000020744310045524665",
            "extra": "mean: 39.81254545657655 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3577.949975185522,
            "unit": "iter/sec",
            "range": "stddev: 0.00029897956103891324",
            "extra": "mean: 279.48965383400827 usec\nrounds: 3169"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2053.673026120006,
            "unit": "iter/sec",
            "range": "stddev: 0.0004157430928508746",
            "extra": "mean: 486.93243144420853 usec\nrounds: 1641"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7991.194768893113,
            "unit": "iter/sec",
            "range": "stddev: 0.000007810481132411465",
            "extra": "mean: 125.13773333277338 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5939.50010083134,
            "unit": "iter/sec",
            "range": "stddev: 0.000014063053691333598",
            "extra": "mean: 168.36433757447568 usec\nrounds: 3694"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30390.656301798932,
            "unit": "iter/sec",
            "range": "stddev: 0.000008275858289433247",
            "extra": "mean: 32.90485042736002 usec\nrounds: 12870"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13338.591334859417,
            "unit": "iter/sec",
            "range": "stddev: 0.000011465080738872513",
            "extra": "mean: 74.97043540021909 usec\nrounds: 7322"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3773.1592669192664,
            "unit": "iter/sec",
            "range": "stddev: 0.0000237650677067602",
            "extra": "mean: 265.0298938524496 usec\nrounds: 2440"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2006.9818894645168,
            "unit": "iter/sec",
            "range": "stddev: 0.000020812013002349428",
            "extra": "mean: 498.26059978389253 usec\nrounds: 1854"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1031.0182687332901,
            "unit": "iter/sec",
            "range": "stddev: 0.00002900123436416528",
            "extra": "mean: 969.9149184122612 usec\nrounds: 907"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 31437.169936098366,
            "unit": "iter/sec",
            "range": "stddev: 0.000011193936866080851",
            "extra": "mean: 31.80947909855364 usec\nrounds: 14377"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23554.59972800086,
            "unit": "iter/sec",
            "range": "stddev: 0.000010255066031799046",
            "extra": "mean: 42.4545528919023 usec\nrounds: 10512"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18943.102711235675,
            "unit": "iter/sec",
            "range": "stddev: 0.0001785886209706564",
            "extra": "mean: 52.78966256181848 usec\nrounds: 11531"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15469.4539984315,
            "unit": "iter/sec",
            "range": "stddev: 0.000010811637630367135",
            "extra": "mean: 64.64352265447724 usec\nrounds: 9689"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 682.4182071453556,
            "unit": "iter/sec",
            "range": "stddev: 0.00006318129863733978",
            "extra": "mean: 1.4653770804022512 msec\nrounds: 597"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Copilot",
            "username": "Copilot",
            "email": "198982749+Copilot@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3fbce38b23df71e298d821406af817725774bf9e",
          "message": "Fix CI benchmark storage permissions - add write access to test-performance job (#7)\n\n* Initial plan\n\n* Add write permissions to CI test-performance job for benchmark storage\n\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: ArtnerC <1809503+ArtnerC@users.noreply.github.com>",
          "timestamp": "2025-08-21T04:49:16Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/3fbce38b23df71e298d821406af817725774bf9e"
        },
        "date": 1756438241009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24551.35075120272,
            "unit": "iter/sec",
            "range": "stddev: 0.000017141456434725215",
            "extra": "mean: 40.73095652185296 usec\nrounds: 46"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3333.085657782168,
            "unit": "iter/sec",
            "range": "stddev: 0.0003216318599813153",
            "extra": "mean: 300.0222924559938 usec\nrounds: 3009"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1959.812933484893,
            "unit": "iter/sec",
            "range": "stddev: 0.0003784840986236669",
            "extra": "mean: 510.2527812293919 usec\nrounds: 1513"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7997.061346545579,
            "unit": "iter/sec",
            "range": "stddev: 0.000009210011725240399",
            "extra": "mean: 125.04593333299377 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5621.452664767246,
            "unit": "iter/sec",
            "range": "stddev: 0.000012690325814871167",
            "extra": "mean: 177.88996183629783 usec\nrounds: 3616"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 29434.454273982257,
            "unit": "iter/sec",
            "range": "stddev: 0.000008397158400484303",
            "extra": "mean: 33.973791078026586 usec\nrounds: 15714"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 12991.256260045206,
            "unit": "iter/sec",
            "range": "stddev: 0.000010752349777413754",
            "extra": "mean: 76.97484985155087 usec\nrounds: 8758"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3654.9930111241833,
            "unit": "iter/sec",
            "range": "stddev: 0.000012559728968903493",
            "extra": "mean: 273.59833437613753 usec\nrounds: 2557"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1936.4757027490202,
            "unit": "iter/sec",
            "range": "stddev: 0.000015003571509770019",
            "extra": "mean: 516.4020382906949 usec\nrounds: 1802"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 996.1557776040142,
            "unit": "iter/sec",
            "range": "stddev: 0.000019587342256024087",
            "extra": "mean: 1.0038590574711437 msec\nrounds: 870"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32134.406010333394,
            "unit": "iter/sec",
            "range": "stddev: 0.00001031516358422942",
            "extra": "mean: 31.119293123962898 usec\nrounds: 16812"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23614.98365778614,
            "unit": "iter/sec",
            "range": "stddev: 0.000010296086369357583",
            "extra": "mean: 42.345995851252184 usec\nrounds: 13980"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18112.130680585506,
            "unit": "iter/sec",
            "range": "stddev: 0.00017527973552709016",
            "extra": "mean: 55.21161577483016 usec\nrounds: 12222"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 14771.726036711241,
            "unit": "iter/sec",
            "range": "stddev: 0.00001148997087932783",
            "extra": "mean: 67.69689591553234 usec\nrounds: 10136"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 666.560506549827,
            "unit": "iter/sec",
            "range": "stddev: 0.00009120952890267761",
            "extra": "mean: 1.5002388983050974 msec\nrounds: 531"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T15:24:28-04:00",
          "tree_id": "49607a7615dbf77e514db5ba2609b98721f72409",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1756495515629,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25682.04374277132,
            "unit": "iter/sec",
            "range": "stddev: 0.00001777607336187192",
            "extra": "mean: 38.93771111115206 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3525.65686404751,
            "unit": "iter/sec",
            "range": "stddev: 0.00035463673581875545",
            "extra": "mean: 283.63508944883085 usec\nrounds: 3175"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2107.8594103804044,
            "unit": "iter/sec",
            "range": "stddev: 0.00047811041865859397",
            "extra": "mean: 474.41494203806053 usec\nrounds: 1570"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8125.4834662794765,
            "unit": "iter/sec",
            "range": "stddev: 0.000006339366044717299",
            "extra": "mean: 123.06959999979958 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5996.645201418984,
            "unit": "iter/sec",
            "range": "stddev: 0.00001307501078032506",
            "extra": "mean: 166.75990765025927 usec\nrounds: 3660"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31441.11732245782,
            "unit": "iter/sec",
            "range": "stddev: 0.000008934059854744346",
            "extra": "mean: 31.805485464911204 usec\nrounds: 15239"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13551.943980881297,
            "unit": "iter/sec",
            "range": "stddev: 0.000021511160077107722",
            "extra": "mean: 73.79015153920146 usec\nrounds: 8803"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3839.822729056956,
            "unit": "iter/sec",
            "range": "stddev: 0.00001658048129679154",
            "extra": "mean: 260.4286891769078 usec\nrounds: 3317"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1903.562722522575,
            "unit": "iter/sec",
            "range": "stddev: 0.0000902235255320601",
            "extra": "mean: 525.330732824403 usec\nrounds: 1834"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1033.7608383593058,
            "unit": "iter/sec",
            "range": "stddev: 0.00004644924007250166",
            "extra": "mean: 967.3417321429123 usec\nrounds: 896"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34809.63859942668,
            "unit": "iter/sec",
            "range": "stddev: 0.000010344843943910034",
            "extra": "mean: 28.727675443791313 usec\nrounds: 15153"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25256.934710306537,
            "unit": "iter/sec",
            "range": "stddev: 0.000010573997893955397",
            "extra": "mean: 39.59308647188815 usec\nrounds: 9240"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19456.50628119123,
            "unit": "iter/sec",
            "range": "stddev: 0.00020026641224047903",
            "extra": "mean: 51.39668887865591 usec\nrounds: 10835"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15701.02450661067,
            "unit": "iter/sec",
            "range": "stddev: 0.000011076656920803566",
            "extra": "mean: 63.69011140508479 usec\nrounds: 6804"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 679.3509045205112,
            "unit": "iter/sec",
            "range": "stddev: 0.0000553161561040998",
            "extra": "mean: 1.4719933297296546 msec\nrounds: 555"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1756524275446,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25443.75319113732,
            "unit": "iter/sec",
            "range": "stddev: 0.000021960781609866808",
            "extra": "mean: 39.30237777767489 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3477.129179838473,
            "unit": "iter/sec",
            "range": "stddev: 0.000492835637500621",
            "extra": "mean: 287.59357167353045 usec\nrounds: 2916"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2075.230591206735,
            "unit": "iter/sec",
            "range": "stddev: 0.0006129427142887046",
            "extra": "mean: 481.87416099070975 usec\nrounds: 1615"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8123.595633371349,
            "unit": "iter/sec",
            "range": "stddev: 0.000008217039445190613",
            "extra": "mean: 123.09820000050803 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5946.93931733302,
            "unit": "iter/sec",
            "range": "stddev: 0.00001158695919429278",
            "extra": "mean: 168.15372524239285 usec\nrounds: 3403"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31342.477633720446,
            "unit": "iter/sec",
            "range": "stddev: 0.000007680306114184009",
            "extra": "mean: 31.905582311850466 usec\nrounds: 11748"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13500.581024108316,
            "unit": "iter/sec",
            "range": "stddev: 0.000011392711252148888",
            "extra": "mean: 74.07088615032757 usec\nrounds: 7141"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3770.0715732220106,
            "unit": "iter/sec",
            "range": "stddev: 0.000013878612261860983",
            "extra": "mean: 265.24695369254533 usec\nrounds: 2505"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1992.9726782267662,
            "unit": "iter/sec",
            "range": "stddev: 0.00002230896207267356",
            "extra": "mean: 501.7630251156996 usec\nrounds: 1513"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1028.0204033412745,
            "unit": "iter/sec",
            "range": "stddev: 0.000033415917820503414",
            "extra": "mean: 972.743339285677 usec\nrounds: 896"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34388.12924071687,
            "unit": "iter/sec",
            "range": "stddev: 0.000010176559052658845",
            "extra": "mean: 29.079802306197028 usec\nrounds: 15003"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25061.574436882747,
            "unit": "iter/sec",
            "range": "stddev: 0.000010184961612148963",
            "extra": "mean: 39.90172295513545 usec\nrounds: 13265"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19316.350574830893,
            "unit": "iter/sec",
            "range": "stddev: 0.00019478121353109156",
            "extra": "mean: 51.76961331935003 usec\nrounds: 11472"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15229.820525155668,
            "unit": "iter/sec",
            "range": "stddev: 0.000012642692451054165",
            "extra": "mean: 65.66065557688368 usec\nrounds: 9889"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 629.5682958934457,
            "unit": "iter/sec",
            "range": "stddev: 0.00020949611069643367",
            "extra": "mean: 1.5883900230091157 msec\nrounds: 565"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1756611213237,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25944.52824486627,
            "unit": "iter/sec",
            "range": "stddev: 0.000020430435453798053",
            "extra": "mean: 38.54377272008688 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3513.7693165014584,
            "unit": "iter/sec",
            "range": "stddev: 0.0003270352849318284",
            "extra": "mean: 284.59466456826664 usec\nrounds: 3017"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2097.5179603836923,
            "unit": "iter/sec",
            "range": "stddev: 0.0004107563445909009",
            "extra": "mean: 476.7539629634795 usec\nrounds: 1539"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8116.790880620039,
            "unit": "iter/sec",
            "range": "stddev: 0.000007209724159031627",
            "extra": "mean: 123.20140000004662 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6015.809658120753,
            "unit": "iter/sec",
            "range": "stddev: 0.000013959282065157938",
            "extra": "mean: 166.2286636097434 usec\nrounds: 3490"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31670.592383312796,
            "unit": "iter/sec",
            "range": "stddev: 0.000007558362357464344",
            "extra": "mean: 31.575033011599086 usec\nrounds: 14722"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13826.977991763872,
            "unit": "iter/sec",
            "range": "stddev: 0.000010969159679170583",
            "extra": "mean: 72.32238314081765 usec\nrounds: 8660"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3853.938282184906,
            "unit": "iter/sec",
            "range": "stddev: 0.000015864017167743067",
            "extra": "mean: 259.47483503370273 usec\nrounds: 3334"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2032.7108032450067,
            "unit": "iter/sec",
            "range": "stddev: 0.000015399118259209858",
            "extra": "mean: 491.9538964439045 usec\nrounds: 1603"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1039.0556393491404,
            "unit": "iter/sec",
            "range": "stddev: 0.00002430020378630033",
            "extra": "mean: 962.4123695882112 usec\nrounds: 901"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 35004.397579272896,
            "unit": "iter/sec",
            "range": "stddev: 0.000010168054316048546",
            "extra": "mean: 28.56783916178945 usec\nrounds: 16215"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25663.759877901128,
            "unit": "iter/sec",
            "range": "stddev: 0.000009930226312079984",
            "extra": "mean: 38.9654518573131 usec\nrounds: 13730"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19719.918075206377,
            "unit": "iter/sec",
            "range": "stddev: 0.00017614895796145435",
            "extra": "mean: 50.71014981838532 usec\nrounds: 12108"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15800.864675519713,
            "unit": "iter/sec",
            "range": "stddev: 0.000010656523089066685",
            "extra": "mean: 63.28767574025872 usec\nrounds: 10103"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 678.6866710002342,
            "unit": "iter/sec",
            "range": "stddev: 0.00008987276019880291",
            "extra": "mean: 1.4734339758378059 msec\nrounds: 538"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1756698470580,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25305.45085040758,
            "unit": "iter/sec",
            "range": "stddev: 0.00001939561510121526",
            "extra": "mean: 39.517177777683955 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3509.434063226483,
            "unit": "iter/sec",
            "range": "stddev: 0.0003706137168236998",
            "extra": "mean: 284.94622836156833 usec\nrounds: 3131"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2102.3538926024607,
            "unit": "iter/sec",
            "range": "stddev: 0.0005235822788463674",
            "extra": "mean: 475.65731132075035 usec\nrounds: 1484"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7974.858991168717,
            "unit": "iter/sec",
            "range": "stddev: 0.000006991244085119117",
            "extra": "mean: 125.3940666671838 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5948.6206999060505,
            "unit": "iter/sec",
            "range": "stddev: 0.000012395652275018467",
            "extra": "mean: 168.10619645253118 usec\nrounds: 3721"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 32154.422960113978,
            "unit": "iter/sec",
            "range": "stddev: 0.00000760536418136311",
            "extra": "mean: 31.09992056895103 usec\nrounds: 14201"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13619.425351909524,
            "unit": "iter/sec",
            "range": "stddev: 0.000011092426808816918",
            "extra": "mean: 73.42453695080417 usec\nrounds: 7943"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3800.9919563332655,
            "unit": "iter/sec",
            "range": "stddev: 0.000014470697736933923",
            "extra": "mean: 263.0892176274633 usec\nrounds: 3313"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1896.672850003999,
            "unit": "iter/sec",
            "range": "stddev: 0.0000887804218954653",
            "extra": "mean: 527.239054430442 usec\nrounds: 1580"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1027.61615186738,
            "unit": "iter/sec",
            "range": "stddev: 0.000028605957995921857",
            "extra": "mean: 973.1260044743399 usec\nrounds: 894"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34884.056509197486,
            "unit": "iter/sec",
            "range": "stddev: 0.000010264364413341666",
            "extra": "mean: 28.666390897983476 usec\nrounds: 12305"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24349.098101243835,
            "unit": "iter/sec",
            "range": "stddev: 0.000012175413697796017",
            "extra": "mean: 41.06928297064591 usec\nrounds: 12913"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19332.272081768562,
            "unit": "iter/sec",
            "range": "stddev: 0.00020555924934260967",
            "extra": "mean: 51.72697734494732 usec\nrounds: 11653"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15600.494275064822,
            "unit": "iter/sec",
            "range": "stddev: 0.000010670367389861854",
            "extra": "mean: 64.10053312210486 usec\nrounds: 10416"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 645.672439774477,
            "unit": "iter/sec",
            "range": "stddev: 0.00015087750506775194",
            "extra": "mean: 1.5487729356224094 msec\nrounds: 466"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1756784099623,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25303.65795157095,
            "unit": "iter/sec",
            "range": "stddev: 0.000017430122966694977",
            "extra": "mean: 39.519977780047256 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3499.5875348748027,
            "unit": "iter/sec",
            "range": "stddev: 0.0003060730882356374",
            "extra": "mean: 285.74796030520633 usec\nrounds: 3149"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2044.890551113421,
            "unit": "iter/sec",
            "range": "stddev: 0.00041659973940427335",
            "extra": "mean: 489.0237276784866 usec\nrounds: 1568"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8056.641411865638,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075160903403636025",
            "extra": "mean: 124.12119999870205 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5927.4719739930715,
            "unit": "iter/sec",
            "range": "stddev: 0.000013025545072656217",
            "extra": "mean: 168.70598534881725 usec\nrounds: 3481"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31013.466201298204,
            "unit": "iter/sec",
            "range": "stddev: 0.000008147978754758193",
            "extra": "mean: 32.24405790405139 usec\nrounds: 13177"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13658.328442935968,
            "unit": "iter/sec",
            "range": "stddev: 0.000010742885788876637",
            "extra": "mean: 73.21540144373932 usec\nrounds: 8173"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3791.2679516503895,
            "unit": "iter/sec",
            "range": "stddev: 0.00002251597562825088",
            "extra": "mean: 263.7640000002339 usec\nrounds: 3223"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2019.101599014647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000222240461131031",
            "extra": "mean: 495.2697776516127 usec\nrounds: 1754"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1034.4033409980073,
            "unit": "iter/sec",
            "range": "stddev: 0.0000269275063868866",
            "extra": "mean: 966.7408837206438 usec\nrounds: 903"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34483.359662161005,
            "unit": "iter/sec",
            "range": "stddev: 0.00001018164794355735",
            "extra": "mean: 28.99949453293299 usec\nrounds: 13261"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25008.96637553092,
            "unit": "iter/sec",
            "range": "stddev: 0.000009992390512634003",
            "extra": "mean: 39.98565894264276 usec\nrounds: 13033"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18979.397006928644,
            "unit": "iter/sec",
            "range": "stddev: 0.00017609370210161908",
            "extra": "mean: 52.688712904574295 usec\nrounds: 11275"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15453.420523308643,
            "unit": "iter/sec",
            "range": "stddev: 0.000011910822391983095",
            "extra": "mean: 64.71059261551085 usec\nrounds: 9696"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 670.4801289495217,
            "unit": "iter/sec",
            "range": "stddev: 0.0000612295947708245",
            "extra": "mean: 1.4914685116272652 msec\nrounds: 516"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1756869739863,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 26043.91235105032,
            "unit": "iter/sec",
            "range": "stddev: 0.00001716930305866803",
            "extra": "mean: 38.3966888891665 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3476.610063042818,
            "unit": "iter/sec",
            "range": "stddev: 0.00036597176376799794",
            "extra": "mean: 287.63651426722686 usec\nrounds: 3084"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2102.3996082372673,
            "unit": "iter/sec",
            "range": "stddev: 0.0004912643929383748",
            "extra": "mean: 475.64696838886806 usec\nrounds: 1645"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8049.632963518758,
            "unit": "iter/sec",
            "range": "stddev: 0.000010870948025705652",
            "extra": "mean: 124.2292666674416 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5892.10597650171,
            "unit": "iter/sec",
            "range": "stddev: 0.00001484268870792304",
            "extra": "mean: 169.7186038384403 usec\nrounds: 3491"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31476.698030548025,
            "unit": "iter/sec",
            "range": "stddev: 0.000007942750703768716",
            "extra": "mean: 31.76953310126442 usec\nrounds: 13791"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13729.15282216643,
            "unit": "iter/sec",
            "range": "stddev: 0.00001084273191529893",
            "extra": "mean: 72.83770622652317 usec\nrounds: 7179"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3736.038619038171,
            "unit": "iter/sec",
            "range": "stddev: 0.00003274412443534426",
            "extra": "mean: 267.66318605599594 usec\nrounds: 2467"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1984.2291264329463,
            "unit": "iter/sec",
            "range": "stddev: 0.000045232100107038744",
            "extra": "mean: 503.97405555562153 usec\nrounds: 1854"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1037.0656504960152,
            "unit": "iter/sec",
            "range": "stddev: 0.00004330019380379243",
            "extra": "mean: 964.2591088825599 usec\nrounds: 698"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34972.10269984361,
            "unit": "iter/sec",
            "range": "stddev: 0.000010113348869988428",
            "extra": "mean: 28.594220043980144 usec\nrounds: 16374"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25500.371567156933,
            "unit": "iter/sec",
            "range": "stddev: 0.00001025085114219528",
            "extra": "mean: 39.215114860833815 usec\nrounds: 13216"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 20116.663497661077,
            "unit": "iter/sec",
            "range": "stddev: 0.00001146490080787228",
            "extra": "mean: 49.71003268590081 usec\nrounds: 10555"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15660.628273147198,
            "unit": "iter/sec",
            "range": "stddev: 0.000010684385004044951",
            "extra": "mean: 63.85439859489352 usec\nrounds: 9679"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 623.7541020997854,
            "unit": "iter/sec",
            "range": "stddev: 0.001027991421884352",
            "extra": "mean: 1.6031958693876844 msec\nrounds: 490"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1756956164691,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25260.591064585406,
            "unit": "iter/sec",
            "range": "stddev: 0.000019666121969039667",
            "extra": "mean: 39.58735555487338 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3540.2822218280953,
            "unit": "iter/sec",
            "range": "stddev: 0.0003594101346205302",
            "extra": "mean: 282.46335668788294 usec\nrounds: 2983"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2044.1636400087632,
            "unit": "iter/sec",
            "range": "stddev: 0.0004996782983326541",
            "extra": "mean: 489.1976260744532 usec\nrounds: 1396"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8058.3770321799675,
            "unit": "iter/sec",
            "range": "stddev: 0.000008746887243782766",
            "extra": "mean: 124.0944666657621 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5930.096533885228,
            "unit": "iter/sec",
            "range": "stddev: 0.000012159712929596123",
            "extra": "mean: 168.63131894833234 usec\nrounds: 3499"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30914.62362565927,
            "unit": "iter/sec",
            "range": "stddev: 0.000007854014030487572",
            "extra": "mean: 32.34715104763545 usec\nrounds: 14843"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13583.214905127217,
            "unit": "iter/sec",
            "range": "stddev: 0.000010739470462658258",
            "extra": "mean: 73.62027377057348 usec\nrounds: 7930"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3871.3952786317013,
            "unit": "iter/sec",
            "range": "stddev: 0.000013008300035836157",
            "extra": "mean: 258.3048043478108 usec\nrounds: 2530"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2039.6015046637763,
            "unit": "iter/sec",
            "range": "stddev: 0.00002258729448335243",
            "extra": "mean: 490.29185245911447 usec\nrounds: 1708"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1044.5110140938416,
            "unit": "iter/sec",
            "range": "stddev: 0.00003232120922019707",
            "extra": "mean: 957.3857877099966 usec\nrounds: 895"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33740.78741673319,
            "unit": "iter/sec",
            "range": "stddev: 0.000010225543848833883",
            "extra": "mean: 29.637719702536234 usec\nrounds: 14927"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24740.250885034322,
            "unit": "iter/sec",
            "range": "stddev: 0.000010088318567022582",
            "extra": "mean: 40.41996197398758 usec\nrounds: 13070"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19431.521549832094,
            "unit": "iter/sec",
            "range": "stddev: 0.00020005252608422579",
            "extra": "mean: 51.462773897324624 usec\nrounds: 11654"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15793.07712096972,
            "unit": "iter/sec",
            "range": "stddev: 0.000012002912921592407",
            "extra": "mean: 63.318882845966776 usec\nrounds: 10260"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 660.2337941884654,
            "unit": "iter/sec",
            "range": "stddev: 0.00009075325845192816",
            "extra": "mean: 1.514614987603236 msec\nrounds: 484"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1757042781819,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25511.321757589532,
            "unit": "iter/sec",
            "range": "stddev: 0.0000164883323548898",
            "extra": "mean: 39.19828260966147 usec\nrounds: 46"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3508.452179847944,
            "unit": "iter/sec",
            "range": "stddev: 0.0003204764888848654",
            "extra": "mean: 285.0259740588341 usec\nrounds: 3161"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2039.9067336103988,
            "unit": "iter/sec",
            "range": "stddev: 0.000411368950911937",
            "extra": "mean: 490.2184906415382 usec\nrounds: 1496"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7696.341364573241,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068325959542131795",
            "extra": "mean: 129.93186666629225 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5934.51841158387,
            "unit": "iter/sec",
            "range": "stddev: 0.000014017192487386407",
            "extra": "mean: 168.50566981948396 usec\nrounds: 3489"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30458.391169452414,
            "unit": "iter/sec",
            "range": "stddev: 0.000008124561300613065",
            "extra": "mean: 32.83167500333794 usec\nrounds: 14994"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13515.174241887915,
            "unit": "iter/sec",
            "range": "stddev: 0.00001116045081434602",
            "extra": "mean: 73.99090696889984 usec\nrounds: 8911"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3800.8847512658745,
            "unit": "iter/sec",
            "range": "stddev: 0.000025912277523002678",
            "extra": "mean: 263.09663813588475 usec\nrounds: 3283"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2022.019105192628,
            "unit": "iter/sec",
            "range": "stddev: 0.000016008487185599202",
            "extra": "mean: 494.55516885669323 usec\nrounds: 1522"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1039.8195274305374,
            "unit": "iter/sec",
            "range": "stddev: 0.00002072168031416386",
            "extra": "mean: 961.7053475337841 usec\nrounds: 892"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33928.75748278959,
            "unit": "iter/sec",
            "range": "stddev: 0.000010334460732612424",
            "extra": "mean: 29.47352258647407 usec\nrounds: 16625"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24990.302027936537,
            "unit": "iter/sec",
            "range": "stddev: 0.000010397765085277122",
            "extra": "mean: 40.015522776879806 usec\nrounds: 14203"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19498.09009279776,
            "unit": "iter/sec",
            "range": "stddev: 0.00015507029954250456",
            "extra": "mean: 51.28707454118195 usec\nrounds: 12369"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15747.848768388178,
            "unit": "iter/sec",
            "range": "stddev: 0.000011011222782568555",
            "extra": "mean: 63.50073681221617 usec\nrounds: 10578"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 687.2291899958832,
            "unit": "iter/sec",
            "range": "stddev: 0.000052960475182826235",
            "extra": "mean: 1.4551186337210016 msec\nrounds: 516"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1757128899383,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24499.704890196346,
            "unit": "iter/sec",
            "range": "stddev: 0.00001930731812401734",
            "extra": "mean: 40.816818181355075 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3527.8255649260996,
            "unit": "iter/sec",
            "range": "stddev: 0.00035696659522579385",
            "extra": "mean: 283.4607271805254 usec\nrounds: 2958"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1999.5066122073158,
            "unit": "iter/sec",
            "range": "stddev: 0.00061524158158899",
            "extra": "mean: 500.1233773846188 usec\nrounds: 1468"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7288.442037261058,
            "unit": "iter/sec",
            "range": "stddev: 0.000019793502897848034",
            "extra": "mean: 137.2035333323159 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6002.307116697838,
            "unit": "iter/sec",
            "range": "stddev: 0.000012476422965159013",
            "extra": "mean: 166.60260472478936 usec\nrounds: 3471"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30742.41017732854,
            "unit": "iter/sec",
            "range": "stddev: 0.000007984023888288498",
            "extra": "mean: 32.52835396547618 usec\nrounds: 14185"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13625.081283070447,
            "unit": "iter/sec",
            "range": "stddev: 0.000011165107223069247",
            "extra": "mean: 73.39405756371734 usec\nrounds: 8078"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3891.9443170300347,
            "unit": "iter/sec",
            "range": "stddev: 0.000013612376747667324",
            "extra": "mean: 256.9409833599844 usec\nrounds: 2524"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2026.4864861077715,
            "unit": "iter/sec",
            "range": "stddev: 0.00001834041526691152",
            "extra": "mean: 493.46492407194785 usec\nrounds: 1778"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1037.031301594698,
            "unit": "iter/sec",
            "range": "stddev: 0.00002339943150197833",
            "extra": "mean: 964.2910473987109 usec\nrounds: 865"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33540.46707521003,
            "unit": "iter/sec",
            "range": "stddev: 0.000010158324310876323",
            "extra": "mean: 29.814730896789044 usec\nrounds: 15076"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24553.39260813308,
            "unit": "iter/sec",
            "range": "stddev: 0.000010368608712064459",
            "extra": "mean: 40.72756934081523 usec\nrounds: 12727"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19113.777784399153,
            "unit": "iter/sec",
            "range": "stddev: 0.0002018053262925551",
            "extra": "mean: 52.31828115194525 usec\nrounds: 11460"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15445.012608760475,
            "unit": "iter/sec",
            "range": "stddev: 0.000012140404757210486",
            "extra": "mean: 64.74581959439747 usec\nrounds: 9911"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 638.6304857203335,
            "unit": "iter/sec",
            "range": "stddev: 0.00009606609367216719",
            "extra": "mean: 1.5658507107941542 msec\nrounds: 491"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1757215797418,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25769.314249624502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000171798992910371",
            "extra": "mean: 38.805844436258965 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3525.4851971452913,
            "unit": "iter/sec",
            "range": "stddev: 0.0003506077694292218",
            "extra": "mean: 283.6489005285669 usec\nrounds: 3026"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2040.848583747377,
            "unit": "iter/sec",
            "range": "stddev: 0.0004580771539558277",
            "extra": "mean: 489.99225516467 usec\nrounds: 1646"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8033.496466571045,
            "unit": "iter/sec",
            "range": "stddev: 0.000014535983738338245",
            "extra": "mean: 124.47880000460526 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5981.4692753033,
            "unit": "iter/sec",
            "range": "stddev: 0.000013529450016003283",
            "extra": "mean: 167.18300370259672 usec\nrounds: 3781"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30793.069213007384,
            "unit": "iter/sec",
            "range": "stddev: 0.000007892660739827603",
            "extra": "mean: 32.474840136350785 usec\nrounds: 14331"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13678.843411204227,
            "unit": "iter/sec",
            "range": "stddev: 0.000010646925895449267",
            "extra": "mean: 73.10559598780904 usec\nrounds: 8626"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3841.3835901465523,
            "unit": "iter/sec",
            "range": "stddev: 0.000015290111695978636",
            "extra": "mean: 260.32286975064864 usec\nrounds: 3048"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2014.9626640150111,
            "unit": "iter/sec",
            "range": "stddev: 0.000039450970802919285",
            "extra": "mean: 496.28711134895264 usec\nrounds: 1868"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1036.6917211471562,
            "unit": "iter/sec",
            "range": "stddev: 0.000023177763888254242",
            "extra": "mean: 964.6069121623208 usec\nrounds: 740"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32132.83061205952,
            "unit": "iter/sec",
            "range": "stddev: 0.000011778638137388492",
            "extra": "mean: 31.12081883084081 usec\nrounds: 15687"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24288.66297556464,
            "unit": "iter/sec",
            "range": "stddev: 0.000010194634305309521",
            "extra": "mean: 41.171471686442345 usec\nrounds: 13492"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19666.953084849894,
            "unit": "iter/sec",
            "range": "stddev: 0.00001138081879667005",
            "extra": "mean: 50.84671711401667 usec\nrounds: 12019"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 14901.622590132434,
            "unit": "iter/sec",
            "range": "stddev: 0.0002038298171840198",
            "extra": "mean: 67.10678612020281 usec\nrounds: 10043"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 674.0266614798642,
            "unit": "iter/sec",
            "range": "stddev: 0.00007929914765775026",
            "extra": "mean: 1.4836208374969067 msec\nrounds: 560"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1757302516875,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25335.377056824964,
            "unit": "iter/sec",
            "range": "stddev: 0.000021332863147546823",
            "extra": "mean: 39.470499995207895 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3505.1548898438687,
            "unit": "iter/sec",
            "range": "stddev: 0.00034745301802501666",
            "extra": "mean: 285.2940972444568 usec\nrounds: 3157"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2010.4253750723974,
            "unit": "iter/sec",
            "range": "stddev: 0.0005481467330190705",
            "extra": "mean: 497.4071718349601 usec\nrounds: 1548"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7833.106782610437,
            "unit": "iter/sec",
            "range": "stddev: 0.000008000787457506585",
            "extra": "mean: 127.66326666451276 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5974.328479535895,
            "unit": "iter/sec",
            "range": "stddev: 0.000016373769411695435",
            "extra": "mean: 167.3828286183694 usec\nrounds: 3606"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30356.816565166628,
            "unit": "iter/sec",
            "range": "stddev: 0.000008057891547142818",
            "extra": "mean: 32.94153054070448 usec\nrounds: 13703"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13461.561448385593,
            "unit": "iter/sec",
            "range": "stddev: 0.00001161258241697843",
            "extra": "mean: 74.28558743606426 usec\nrounds: 7800"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3774.823675613185,
            "unit": "iter/sec",
            "range": "stddev: 0.00002954742381279324",
            "extra": "mean: 264.91303592811107 usec\nrounds: 3006"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2006.0718989523762,
            "unit": "iter/sec",
            "range": "stddev: 0.000046646664452434995",
            "extra": "mean: 498.486619807708 usec\nrounds: 1565"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1042.161379040181,
            "unit": "iter/sec",
            "range": "stddev: 0.000020988298402640172",
            "extra": "mean: 959.5442895043653 usec\nrounds: 867"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 35770.77045432035,
            "unit": "iter/sec",
            "range": "stddev: 0.000011105430552203881",
            "extra": "mean: 27.955785891640506 usec\nrounds: 11695"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25631.806153228277,
            "unit": "iter/sec",
            "range": "stddev: 0.000010259613269712226",
            "extra": "mean: 39.01402788480639 usec\nrounds: 10364"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 20336.702516947746,
            "unit": "iter/sec",
            "range": "stddev: 0.000010604046792535389",
            "extra": "mean: 49.17218015883561 usec\nrounds: 11501"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15109.072481076359,
            "unit": "iter/sec",
            "range": "stddev: 0.00028488436763547177",
            "extra": "mean: 66.18539961685066 usec\nrounds: 9912"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 687.0739072766769,
            "unit": "iter/sec",
            "range": "stddev: 0.0000518548021202847",
            "extra": "mean: 1.4554474990378456 msec\nrounds: 519"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1757388573626,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24557.74234882211,
            "unit": "iter/sec",
            "range": "stddev: 0.00002081916702559615",
            "extra": "mean: 40.72035555206336 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3459.241473985035,
            "unit": "iter/sec",
            "range": "stddev: 0.0003614390156238487",
            "extra": "mean: 289.0807153881638 usec\nrounds: 2983"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2008.3229656372446,
            "unit": "iter/sec",
            "range": "stddev: 0.0004957143907850387",
            "extra": "mean: 497.92788167549446 usec\nrounds: 1479"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8128.107646313774,
            "unit": "iter/sec",
            "range": "stddev: 0.000007749711966566294",
            "extra": "mean: 123.02986666933673 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5829.435767631251,
            "unit": "iter/sec",
            "range": "stddev: 0.000012230054182338352",
            "extra": "mean: 171.5431887169318 usec\nrounds: 3439"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30120.51175450964,
            "unit": "iter/sec",
            "range": "stddev: 0.000007877721184429083",
            "extra": "mean: 33.19996712374185 usec\nrounds: 12167"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13437.903478189217,
            "unit": "iter/sec",
            "range": "stddev: 0.000011126108446360524",
            "extra": "mean: 74.41637020410805 usec\nrounds: 8679"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3821.3296865324155,
            "unit": "iter/sec",
            "range": "stddev: 0.000016424684694793088",
            "extra": "mean: 261.68901456587713 usec\nrounds: 3158"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1997.317083523614,
            "unit": "iter/sec",
            "range": "stddev: 0.00002682935111180298",
            "extra": "mean: 500.67163008280414 usec\nrounds: 1795"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1013.6025625653058,
            "unit": "iter/sec",
            "range": "stddev: 0.00008115099799741474",
            "extra": "mean: 986.5799840413985 usec\nrounds: 877"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 31990.599846641897,
            "unit": "iter/sec",
            "range": "stddev: 0.000010326611775709755",
            "extra": "mean: 31.259182534677343 usec\nrounds: 15986"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 22719.04978930984,
            "unit": "iter/sec",
            "range": "stddev: 0.00001702916443768689",
            "extra": "mean: 44.01592536984259 usec\nrounds: 12649"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18545.50137382796,
            "unit": "iter/sec",
            "range": "stddev: 0.0001627848826338703",
            "extra": "mean: 53.92143247263372 usec\nrounds: 11899"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15331.981704364274,
            "unit": "iter/sec",
            "range": "stddev: 0.000011128865883263286",
            "extra": "mean: 65.2231407056368 usec\nrounds: 10291"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 687.9825869024448,
            "unit": "iter/sec",
            "range": "stddev: 0.00004970954451360173",
            "extra": "mean: 1.453525160429386 msec\nrounds: 561"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1757474540721,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25089.51381006176,
            "unit": "iter/sec",
            "range": "stddev: 0.000020438575299601977",
            "extra": "mean: 39.857288888514276 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3519.300256226691,
            "unit": "iter/sec",
            "range": "stddev: 0.000316582071192202",
            "extra": "mean: 284.14739499157594 usec\nrounds: 2995"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2027.1012901567658,
            "unit": "iter/sec",
            "range": "stddev: 0.0004347961524605061",
            "extra": "mean: 493.31525999999 usec\nrounds: 1550"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7929.120010390011,
            "unit": "iter/sec",
            "range": "stddev: 0.000009835257595396053",
            "extra": "mean: 126.1174000002067 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5993.5753923724105,
            "unit": "iter/sec",
            "range": "stddev: 0.000012768347516519347",
            "extra": "mean: 166.84531928515116 usec\nrounds: 3749"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30126.71504426944,
            "unit": "iter/sec",
            "range": "stddev: 0.000009431854755137868",
            "extra": "mean: 33.19313103106524 usec\nrounds: 10135"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13304.070936690254,
            "unit": "iter/sec",
            "range": "stddev: 0.00001230463337493188",
            "extra": "mean: 75.16496302212119 usec\nrounds: 8762"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3816.5357819835817,
            "unit": "iter/sec",
            "range": "stddev: 0.000018902505399193985",
            "extra": "mean: 262.01771897976715 usec\nrounds: 2313"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2014.1112463023253,
            "unit": "iter/sec",
            "range": "stddev: 0.000016499322535216274",
            "extra": "mean: 496.49690494300347 usec\nrounds: 1841"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1032.6919295982489,
            "unit": "iter/sec",
            "range": "stddev: 0.00002456382304357188",
            "extra": "mean: 968.3429988544917 usec\nrounds: 873"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33762.73148736925,
            "unit": "iter/sec",
            "range": "stddev: 0.000010324806699251491",
            "extra": "mean: 29.61845668127009 usec\nrounds: 16217"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24809.602666274135,
            "unit": "iter/sec",
            "range": "stddev: 0.00001031400789849883",
            "extra": "mean: 40.306973612253266 usec\nrounds: 13529"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19381.22149294486,
            "unit": "iter/sec",
            "range": "stddev: 0.0001732737265897583",
            "extra": "mean: 51.596335162054636 usec\nrounds: 11848"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15505.773887642868,
            "unit": "iter/sec",
            "range": "stddev: 0.000011006680796286266",
            "extra": "mean: 64.49210515038772 usec\nrounds: 10271"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 674.19027300807,
            "unit": "iter/sec",
            "range": "stddev: 0.00005409024622253136",
            "extra": "mean: 1.483260794520585 msec\nrounds: 511"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1757561285432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24081.272689537363,
            "unit": "iter/sec",
            "range": "stddev: 0.00001841807356039164",
            "extra": "mean: 41.52604444508749 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3492.386805306568,
            "unit": "iter/sec",
            "range": "stddev: 0.00036689447512448944",
            "extra": "mean: 286.337125796184 usec\nrounds: 3140"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1997.1408154352537,
            "unit": "iter/sec",
            "range": "stddev: 0.0005403382170155178",
            "extra": "mean: 500.71581947117807 usec\nrounds: 1551"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7900.083951532131,
            "unit": "iter/sec",
            "range": "stddev: 0.000007545381671705291",
            "extra": "mean: 126.58093333376048 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5886.827647366102,
            "unit": "iter/sec",
            "range": "stddev: 0.000016087867070046893",
            "extra": "mean: 169.87077928932104 usec\nrounds: 3602"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 29679.15771683697,
            "unit": "iter/sec",
            "range": "stddev: 0.000007880153257617484",
            "extra": "mean: 33.69367855856302 usec\nrounds: 13875"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13437.011846525264,
            "unit": "iter/sec",
            "range": "stddev: 0.000010750894581335086",
            "extra": "mean: 74.42130820615407 usec\nrounds: 8384"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3815.98865859573,
            "unit": "iter/sec",
            "range": "stddev: 0.00001553269762978993",
            "extra": "mean: 262.0552861831608 usec\nrounds: 3047"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2032.111996507036,
            "unit": "iter/sec",
            "range": "stddev: 0.000020590836682513146",
            "extra": "mean: 492.0988615385784 usec\nrounds: 1755"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1036.2671414351682,
            "unit": "iter/sec",
            "range": "stddev: 0.00003104255657288272",
            "extra": "mean: 965.0021312217422 usec\nrounds: 884"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32738.420578166995,
            "unit": "iter/sec",
            "range": "stddev: 0.000010321236546992475",
            "extra": "mean: 30.545150998117865 usec\nrounds: 15179"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24266.82634554718,
            "unit": "iter/sec",
            "range": "stddev: 0.000010253650472088016",
            "extra": "mean: 41.20852004957353 usec\nrounds: 11297"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18837.2273142405,
            "unit": "iter/sec",
            "range": "stddev: 0.00020504312924387265",
            "extra": "mean: 53.0863689925334 usec\nrounds: 11236"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15333.552543693962,
            "unit": "iter/sec",
            "range": "stddev: 0.000012083816098115258",
            "extra": "mean: 65.21645894846837 usec\nrounds: 9890"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 675.2192144367403,
            "unit": "iter/sec",
            "range": "stddev: 0.000059258539908005274",
            "extra": "mean: 1.4810005086039915 msec\nrounds: 523"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1757647335068,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25335.187403542557,
            "unit": "iter/sec",
            "range": "stddev: 0.00001852143369748835",
            "extra": "mean: 39.470795462131555 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3550.8529077851617,
            "unit": "iter/sec",
            "range": "stddev: 0.0003438833025308387",
            "extra": "mean: 281.62247943515865 usec\nrounds: 3185"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2033.1294999013753,
            "unit": "iter/sec",
            "range": "stddev: 0.0004527549189399746",
            "extra": "mean: 491.85258491823015 usec\nrounds: 1472"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 5381.764429312547,
            "unit": "iter/sec",
            "range": "stddev: 0.00005040511619854228",
            "extra": "mean: 185.81266666994148 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5977.281623777923,
            "unit": "iter/sec",
            "range": "stddev: 0.000013360050208618824",
            "extra": "mean: 167.30013122051173 usec\nrounds: 3757"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30461.624001412707,
            "unit": "iter/sec",
            "range": "stddev: 0.000007943467515747695",
            "extra": "mean: 32.82819064254826 usec\nrounds: 11456"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13582.57152697757,
            "unit": "iter/sec",
            "range": "stddev: 0.00001077897603747648",
            "extra": "mean: 73.62376100974765 usec\nrounds: 8402"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3847.279813198049,
            "unit": "iter/sec",
            "range": "stddev: 0.000016364590626576948",
            "extra": "mean: 259.9239069041746 usec\nrounds: 2535"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2010.8972445127313,
            "unit": "iter/sec",
            "range": "stddev: 0.00004648087972512398",
            "extra": "mean: 497.29045217440444 usec\nrounds: 1495"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1039.9140571185453,
            "unit": "iter/sec",
            "range": "stddev: 0.000026024526815532957",
            "extra": "mean: 961.6179271303039 usec\nrounds: 892"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32957.217152976154,
            "unit": "iter/sec",
            "range": "stddev: 0.000010244806505252551",
            "extra": "mean: 30.342367662850336 usec\nrounds: 15128"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24294.575410200378,
            "unit": "iter/sec",
            "range": "stddev: 0.000010243125970567795",
            "extra": "mean: 41.16145201616233 usec\nrounds: 10462"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19020.967163210422,
            "unit": "iter/sec",
            "range": "stddev: 0.00016698024149760547",
            "extra": "mean: 52.5735621863729 usec\nrounds: 11562"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15568.545249134531,
            "unit": "iter/sec",
            "range": "stddev: 0.000011053385574783238",
            "extra": "mean: 64.23207717853991 usec\nrounds: 8435"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 686.3762069009176,
            "unit": "iter/sec",
            "range": "stddev: 0.000059654337375305856",
            "extra": "mean: 1.4569269592183807 msec\nrounds: 564"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1757733360196,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 23817.898319600692,
            "unit": "iter/sec",
            "range": "stddev: 0.000021376135561601634",
            "extra": "mean: 41.98523255836811 usec\nrounds: 43"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3556.4717040685446,
            "unit": "iter/sec",
            "range": "stddev: 0.00037230147701664234",
            "extra": "mean: 281.1775498891265 usec\nrounds: 3157"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2083.5986022870065,
            "unit": "iter/sec",
            "range": "stddev: 0.000565483268328363",
            "extra": "mean: 479.9388898141785 usec\nrounds: 1561"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8078.7712512117305,
            "unit": "iter/sec",
            "range": "stddev: 0.000010760257676550074",
            "extra": "mean: 123.7811999999394 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5998.507146449178,
            "unit": "iter/sec",
            "range": "stddev: 0.0000132040036563769",
            "extra": "mean: 166.7081451410708 usec\nrounds: 3190"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31432.085805516374,
            "unit": "iter/sec",
            "range": "stddev: 0.000007844300718956365",
            "extra": "mean: 31.814624272389164 usec\nrounds: 14774"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13744.951168232368,
            "unit": "iter/sec",
            "range": "stddev: 0.000010743515942807948",
            "extra": "mean: 72.75398710118533 usec\nrounds: 8683"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3817.037482286102,
            "unit": "iter/sec",
            "range": "stddev: 0.000016879662188697134",
            "extra": "mean: 261.9832801330207 usec\nrounds: 2406"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2036.2201479508417,
            "unit": "iter/sec",
            "range": "stddev: 0.000017728990693455074",
            "extra": "mean: 491.1060334052554 usec\nrounds: 1856"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1039.362058138542,
            "unit": "iter/sec",
            "range": "stddev: 0.00008706790140147172",
            "extra": "mean: 962.1286366667665 usec\nrounds: 900"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33397.540646913665,
            "unit": "iter/sec",
            "range": "stddev: 0.000011428040398369103",
            "extra": "mean: 29.94232451341929 usec\nrounds: 15722"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25063.26978685733,
            "unit": "iter/sec",
            "range": "stddev: 0.00001058434136129337",
            "extra": "mean: 39.89902389050529 usec\nrounds: 12641"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19279.103426835783,
            "unit": "iter/sec",
            "range": "stddev: 0.0001949419638403058",
            "extra": "mean: 51.86963199792984 usec\nrounds: 11557"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15719.16038364387,
            "unit": "iter/sec",
            "range": "stddev: 0.000010732908786249037",
            "extra": "mean: 63.616629361484335 usec\nrounds: 9945"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 690.1372235537834,
            "unit": "iter/sec",
            "range": "stddev: 0.000054645089264054376",
            "extra": "mean: 1.448987195402406 msec\nrounds: 522"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1757820554616,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25727.899447944517,
            "unit": "iter/sec",
            "range": "stddev: 0.00001751693783772137",
            "extra": "mean: 38.86831111196266 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3474.947691249254,
            "unit": "iter/sec",
            "range": "stddev: 0.0002877696442015085",
            "extra": "mean: 287.7741160012964 usec\nrounds: 3181"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2022.5892877863648,
            "unit": "iter/sec",
            "range": "stddev: 0.0005053110695502764",
            "extra": "mean: 494.41575016668656 usec\nrounds: 1501"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8019.006113689924,
            "unit": "iter/sec",
            "range": "stddev: 0.000006511136952518369",
            "extra": "mean: 124.70373333333856 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5864.630454536877,
            "unit": "iter/sec",
            "range": "stddev: 0.000012546539891189945",
            "extra": "mean: 170.5137276341769 usec\nrounds: 3521"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30778.860546721844,
            "unit": "iter/sec",
            "range": "stddev: 0.000007484677465885384",
            "extra": "mean: 32.48983172986587 usec\nrounds: 15487"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13618.707496831756,
            "unit": "iter/sec",
            "range": "stddev: 0.000011025921756348437",
            "extra": "mean: 73.42840722826591 usec\nrounds: 7858"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3863.0136782582185,
            "unit": "iter/sec",
            "range": "stddev: 0.000013129694324916974",
            "extra": "mean: 258.8652495920974 usec\nrounds: 2452"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2041.7323905567018,
            "unit": "iter/sec",
            "range": "stddev: 0.000014397972433119332",
            "extra": "mean: 489.78015171093926 usec\nrounds: 1549"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1041.8293054476303,
            "unit": "iter/sec",
            "range": "stddev: 0.00005006827439754146",
            "extra": "mean: 959.8501354982925 usec\nrounds: 893"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33676.617746768374,
            "unit": "iter/sec",
            "range": "stddev: 0.00001008077794660707",
            "extra": "mean: 29.694193387219254 usec\nrounds: 14608"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23827.05245715282,
            "unit": "iter/sec",
            "range": "stddev: 0.000011969449697648321",
            "extra": "mean: 41.96910221263237 usec\nrounds: 13423"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19118.008610839253,
            "unit": "iter/sec",
            "range": "stddev: 0.00016739255074777468",
            "extra": "mean: 52.30670308585563 usec\nrounds: 11569"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15431.64255544059,
            "unit": "iter/sec",
            "range": "stddev: 0.000010736212728525215",
            "extra": "mean: 64.80191570063546 usec\nrounds: 9834"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 674.8600545638965,
            "unit": "iter/sec",
            "range": "stddev: 0.00008446388231559954",
            "extra": "mean: 1.481788695652187 msec\nrounds: 598"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1757907344024,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24813.713863164572,
            "unit": "iter/sec",
            "range": "stddev: 0.000019212815407826216",
            "extra": "mean: 40.30029545413912 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3493.2044663914025,
            "unit": "iter/sec",
            "range": "stddev: 0.0004528864123431498",
            "extra": "mean: 286.27010231469035 usec\nrounds: 2981"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2012.9251601976416,
            "unit": "iter/sec",
            "range": "stddev: 0.000634373129966827",
            "extra": "mean: 496.7894583332715 usec\nrounds: 1488"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8003.96996907644,
            "unit": "iter/sec",
            "range": "stddev: 0.000008215387043923328",
            "extra": "mean: 124.93800000044075 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5956.568107151293,
            "unit": "iter/sec",
            "range": "stddev: 0.000012853002734900794",
            "extra": "mean: 167.88190481687388 usec\nrounds: 3467"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30821.431902651522,
            "unit": "iter/sec",
            "range": "stddev: 0.000008059066159130254",
            "extra": "mean: 32.444955937104645 usec\nrounds: 14502"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13589.134813334973,
            "unit": "iter/sec",
            "range": "stddev: 0.000011124468926122922",
            "extra": "mean: 73.58820217301128 usec\nrounds: 7271"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3863.0425216400113,
            "unit": "iter/sec",
            "range": "stddev: 0.000013692113555908451",
            "extra": "mean: 258.8633167763997 usec\nrounds: 3040"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1937.246459010903,
            "unit": "iter/sec",
            "range": "stddev: 0.000075433144243803",
            "extra": "mean: 516.1965816732314 usec\nrounds: 1757"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1040.8303053433267,
            "unit": "iter/sec",
            "range": "stddev: 0.00003351600545262957",
            "extra": "mean: 960.7714099659516 usec\nrounds: 883"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33113.28546415133,
            "unit": "iter/sec",
            "range": "stddev: 0.000010545497048563002",
            "extra": "mean: 30.19935913887514 usec\nrounds: 14958"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24203.89207271338,
            "unit": "iter/sec",
            "range": "stddev: 0.000010353813929438348",
            "extra": "mean: 41.31566927318128 usec\nrounds: 12149"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18743.95120395182,
            "unit": "iter/sec",
            "range": "stddev: 0.00021953580214800346",
            "extra": "mean: 53.350544349964395 usec\nrounds: 11522"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15375.078899813303,
            "unit": "iter/sec",
            "range": "stddev: 0.000010673808886391002",
            "extra": "mean: 65.04031663942503 usec\nrounds: 9784"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 680.793613845859,
            "unit": "iter/sec",
            "range": "stddev: 0.00005882800558651007",
            "extra": "mean: 1.4688739430896214 msec\nrounds: 492"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1757993046222,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25294.484001506986,
            "unit": "iter/sec",
            "range": "stddev: 0.00001770204217372571",
            "extra": "mean: 39.53431111464548 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3549.455314099911,
            "unit": "iter/sec",
            "range": "stddev: 0.00035546093451629436",
            "extra": "mean: 281.73336794171905 usec\nrounds: 3188"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2048.4109433467847,
            "unit": "iter/sec",
            "range": "stddev: 0.0005944710687781256",
            "extra": "mean: 488.1832931267959 usec\nrounds: 1484"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7999.961599930731,
            "unit": "iter/sec",
            "range": "stddev: 0.000007164385730286716",
            "extra": "mean: 125.00060000396238 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6036.986706410138,
            "unit": "iter/sec",
            "range": "stddev: 0.000012660716560031848",
            "extra": "mean: 165.64555276197464 usec\nrounds: 3620"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30839.818493018665,
            "unit": "iter/sec",
            "range": "stddev: 0.000007616160138582271",
            "extra": "mean: 32.4256123694883 usec\nrounds: 14568"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13475.660788876212,
            "unit": "iter/sec",
            "range": "stddev: 0.000011023699407121073",
            "extra": "mean: 74.20786376765082 usec\nrounds: 8302"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3822.709385699975,
            "unit": "iter/sec",
            "range": "stddev: 0.000016169186111625975",
            "extra": "mean: 261.5945652946595 usec\nrounds: 3377"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1997.2268393923832,
            "unit": "iter/sec",
            "range": "stddev: 0.00004285233153787105",
            "extra": "mean: 500.69425278914747 usec\nrounds: 1883"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1029.3017871873835,
            "unit": "iter/sec",
            "range": "stddev: 0.000029560085514404543",
            "extra": "mean: 971.5323653838666 usec\nrounds: 884"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32685.760037751195,
            "unit": "iter/sec",
            "range": "stddev: 0.000010552794167254567",
            "extra": "mean: 30.594362769751296 usec\nrounds: 15423"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23963.83856751806,
            "unit": "iter/sec",
            "range": "stddev: 0.00001057316744412673",
            "extra": "mean: 41.72954166681194 usec\nrounds: 9672"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18793.342217799178,
            "unit": "iter/sec",
            "range": "stddev: 0.00019908367251974366",
            "extra": "mean: 53.21033312812768 usec\nrounds: 11362"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15295.360028019784,
            "unit": "iter/sec",
            "range": "stddev: 0.000010869251541436931",
            "extra": "mean: 65.37930445364385 usec\nrounds: 9476"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 692.5149650346369,
            "unit": "iter/sec",
            "range": "stddev: 0.00005408228251839984",
            "extra": "mean: 1.4440121159691963 msec\nrounds: 526"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1758079372096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25264.06562714182,
            "unit": "iter/sec",
            "range": "stddev: 0.00001729592577934211",
            "extra": "mean: 39.581911112741686 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3523.424229698568,
            "unit": "iter/sec",
            "range": "stddev: 0.0003564773833945626",
            "extra": "mean: 283.81481615841386 usec\nrounds: 2921"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2036.4630019437468,
            "unit": "iter/sec",
            "range": "stddev: 0.00047444982157521503",
            "extra": "mean: 491.04746761690643 usec\nrounds: 1544"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7930.373435984642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064707411223837614",
            "extra": "mean: 126.09746666688201 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5957.515017881586,
            "unit": "iter/sec",
            "range": "stddev: 0.000014512446872184568",
            "extra": "mean: 167.85522101051907 usec\nrounds: 3760"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30056.03307892415,
            "unit": "iter/sec",
            "range": "stddev: 0.000009049632716068236",
            "extra": "mean: 33.271190425366505 usec\nrounds: 14037"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13501.470356522423,
            "unit": "iter/sec",
            "range": "stddev: 0.000011166931058619308",
            "extra": "mean: 74.06600715283652 usec\nrounds: 8668"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3807.7680442201295,
            "unit": "iter/sec",
            "range": "stddev: 0.000013296150201139555",
            "extra": "mean: 262.6210389884215 usec\nrounds: 3283"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2019.203444966863,
            "unit": "iter/sec",
            "range": "stddev: 0.000019973777402795932",
            "extra": "mean: 495.24479689881423 usec\nrounds: 1871"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1040.2915597778524,
            "unit": "iter/sec",
            "range": "stddev: 0.00002744551685480068",
            "extra": "mean: 961.2689736842078 usec\nrounds: 912"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34053.43179496542,
            "unit": "iter/sec",
            "range": "stddev: 0.000010630301548418949",
            "extra": "mean: 29.365615953803623 usec\nrounds: 15269"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23552.837645307452,
            "unit": "iter/sec",
            "range": "stddev: 0.00016934139749255796",
            "extra": "mean: 42.45772908808018 usec\nrounds: 13270"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19863.59663767504,
            "unit": "iter/sec",
            "range": "stddev: 0.000010506991505161186",
            "extra": "mean: 50.34335011129415 usec\nrounds: 12079"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15359.694305415047,
            "unit": "iter/sec",
            "range": "stddev: 0.00001072673608074955",
            "extra": "mean: 65.10546239500684 usec\nrounds: 9972"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 674.7996211259233,
            "unit": "iter/sec",
            "range": "stddev: 0.00005640311951758603",
            "extra": "mean: 1.481921401098996 msec\nrounds: 546"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1758165925456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25001.7188687058,
            "unit": "iter/sec",
            "range": "stddev: 0.000018823428749267",
            "extra": "mean: 39.997249999146334 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3522.52744748072,
            "unit": "iter/sec",
            "range": "stddev: 0.0004145840176658725",
            "extra": "mean: 283.88707111854893 usec\nrounds: 2995"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2058.641380543576,
            "unit": "iter/sec",
            "range": "stddev: 0.0006183151377726067",
            "extra": "mean: 485.75726178007466 usec\nrounds: 1528"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7746.301399324971,
            "unit": "iter/sec",
            "range": "stddev: 0.000009978199868926617",
            "extra": "mean: 129.0938666661153 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5992.042612198152,
            "unit": "iter/sec",
            "range": "stddev: 0.000012727409502554584",
            "extra": "mean: 166.8879987542603 usec\nrounds: 3211"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31045.845235496705,
            "unit": "iter/sec",
            "range": "stddev: 0.000007831118785215798",
            "extra": "mean: 32.210429202830525 usec\nrounds: 13800"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13607.302195268097,
            "unit": "iter/sec",
            "range": "stddev: 0.000010700991124647246",
            "extra": "mean: 73.48995308913969 usec\nrounds: 7397"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3855.2817062822173,
            "unit": "iter/sec",
            "range": "stddev: 0.00001318374828880662",
            "extra": "mean: 259.38441758237553 usec\nrounds: 3276"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2029.7952493185876,
            "unit": "iter/sec",
            "range": "stddev: 0.000023252987587315454",
            "extra": "mean: 492.660528363984 usec\nrounds: 1516"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1042.813406082645,
            "unit": "iter/sec",
            "range": "stddev: 0.000029754346956011634",
            "extra": "mean: 958.9443271126761 usec\nrounds: 911"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33973.2093058441,
            "unit": "iter/sec",
            "range": "stddev: 0.000010363518259699122",
            "extra": "mean: 29.434958322526775 usec\nrounds: 15380"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24984.789230917017,
            "unit": "iter/sec",
            "range": "stddev: 0.000010614209399365466",
            "extra": "mean: 40.02435204706736 usec\nrounds: 12896"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18784.208611239574,
            "unit": "iter/sec",
            "range": "stddev: 0.00023985165202379825",
            "extra": "mean: 53.23620604392392 usec\nrounds: 11284"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15377.43160011971,
            "unit": "iter/sec",
            "range": "stddev: 0.000010924256138884705",
            "extra": "mean: 65.0303656686215 usec\nrounds: 10020"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 642.0663590088963,
            "unit": "iter/sec",
            "range": "stddev: 0.00010504461364597363",
            "extra": "mean: 1.557471413926149 msec\nrounds: 517"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1758252535062,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24177.139305490324,
            "unit": "iter/sec",
            "range": "stddev: 0.000018153613417182247",
            "extra": "mean: 41.361386364387315 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3283.8786818328304,
            "unit": "iter/sec",
            "range": "stddev: 0.0003178235875537949",
            "extra": "mean: 304.51794870871123 usec\nrounds: 2827"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1928.1809460800391,
            "unit": "iter/sec",
            "range": "stddev: 0.00043706325124866685",
            "extra": "mean: 518.623525469943 usec\nrounds: 1433"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8041.7570917456505,
            "unit": "iter/sec",
            "range": "stddev: 0.000010164904131910929",
            "extra": "mean: 124.35093333351688 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5591.853868470048,
            "unit": "iter/sec",
            "range": "stddev: 0.00001336766352923093",
            "extra": "mean: 178.83156883597243 usec\nrounds: 3581"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 29594.649785380803,
            "unit": "iter/sec",
            "range": "stddev: 0.000007703141468842746",
            "extra": "mean: 33.78989132332902 usec\nrounds: 15744"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 12917.162959411384,
            "unit": "iter/sec",
            "range": "stddev: 0.000010557678953370662",
            "extra": "mean: 77.4163802951332 usec\nrounds: 8404"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3539.785438628385,
            "unit": "iter/sec",
            "range": "stddev: 0.00002580498501161452",
            "extra": "mean: 282.50299837028695 usec\nrounds: 2455"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1875.9455938251442,
            "unit": "iter/sec",
            "range": "stddev: 0.000050288859004933716",
            "extra": "mean: 533.0645000002113 usec\nrounds: 1472"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 971.1499435768167,
            "unit": "iter/sec",
            "range": "stddev: 0.000029329108237753612",
            "extra": "mean: 1.0297071081700593 msec\nrounds: 869"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 31906.103738606707,
            "unit": "iter/sec",
            "range": "stddev: 0.000010649166761137933",
            "extra": "mean: 31.341965418046012 usec\nrounds: 15991"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23484.566910056696,
            "unit": "iter/sec",
            "range": "stddev: 0.000009967011803011998",
            "extra": "mean: 42.58115569386014 usec\nrounds: 13321"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19157.855294053512,
            "unit": "iter/sec",
            "range": "stddev: 0.000010642726816262278",
            "extra": "mean: 52.197909664261545 usec\nrounds: 11889"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 13703.40123195323,
            "unit": "iter/sec",
            "range": "stddev: 0.00019619643039176993",
            "extra": "mean: 72.97458368716711 usec\nrounds: 8484"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 672.6763572423924,
            "unit": "iter/sec",
            "range": "stddev: 0.0001066803384062567",
            "extra": "mean: 1.4865989999997273 msec\nrounds: 516"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1758338550619,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25538.60926956009,
            "unit": "iter/sec",
            "range": "stddev: 0.000017895953697901065",
            "extra": "mean: 39.15639999989809 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3558.693226548778,
            "unit": "iter/sec",
            "range": "stddev: 0.00029429413998975363",
            "extra": "mean: 281.0020241530626 usec\nrounds: 3188"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2102.2341417182474,
            "unit": "iter/sec",
            "range": "stddev: 0.0004667418736425812",
            "extra": "mean: 475.68440648702267 usec\nrounds: 1449"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8101.854352384638,
            "unit": "iter/sec",
            "range": "stddev: 0.00000736301049885921",
            "extra": "mean: 123.42853333393577 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5918.846229378429,
            "unit": "iter/sec",
            "range": "stddev: 0.00001262281676049173",
            "extra": "mean: 168.9518465670658 usec\nrounds: 3350"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30536.080140926704,
            "unit": "iter/sec",
            "range": "stddev: 0.000008457868488685825",
            "extra": "mean: 32.748145648849224 usec\nrounds: 15249"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13661.604503622073,
            "unit": "iter/sec",
            "range": "stddev: 0.000011513952756447653",
            "extra": "mean: 73.19784434799529 usec\nrounds: 8519"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3873.759284136697,
            "unit": "iter/sec",
            "range": "stddev: 0.00002622847541577374",
            "extra": "mean: 258.14717091355334 usec\nrounds: 3218"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2033.3313046047338,
            "unit": "iter/sec",
            "range": "stddev: 0.000015559355839395613",
            "extra": "mean: 491.8037693785438 usec\nrounds: 1561"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1049.2671675515685,
            "unit": "iter/sec",
            "range": "stddev: 0.000022328648625161994",
            "extra": "mean: 953.0461172567403 usec\nrounds: 904"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33849.93620785371,
            "unit": "iter/sec",
            "range": "stddev: 0.000010158267094243971",
            "extra": "mean: 29.54215316269886 usec\nrounds: 15983"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25042.091343180327,
            "unit": "iter/sec",
            "range": "stddev: 0.000010122219320702615",
            "extra": "mean: 39.932767047921836 usec\nrounds: 13814"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19543.30614177448,
            "unit": "iter/sec",
            "range": "stddev: 0.0001773351963617828",
            "extra": "mean: 51.168415044293155 usec\nrounds: 12071"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15776.705803712037,
            "unit": "iter/sec",
            "range": "stddev: 0.000010680183592161663",
            "extra": "mean: 63.38458816698693 usec\nrounds: 10327"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 699.923130318325,
            "unit": "iter/sec",
            "range": "stddev: 0.00005077249040736004",
            "extra": "mean: 1.4287283227019518 msec\nrounds: 533"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1758425677855,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25062.670926690957,
            "unit": "iter/sec",
            "range": "stddev: 0.000017923731354758192",
            "extra": "mean: 39.899977258011695 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3570.3166027789403,
            "unit": "iter/sec",
            "range": "stddev: 0.00035049087516544143",
            "extra": "mean: 280.0872054936681 usec\nrounds: 3202"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2041.8871617965308,
            "unit": "iter/sec",
            "range": "stddev: 0.0005020526308754562",
            "extra": "mean: 489.7430272886193 usec\nrounds: 1539"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8068.029626771202,
            "unit": "iter/sec",
            "range": "stddev: 0.00001155062849640128",
            "extra": "mean: 123.9459999851533 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5991.898374585616,
            "unit": "iter/sec",
            "range": "stddev: 0.00001493505091275914",
            "extra": "mean: 166.89201609984875 usec\nrounds: 3229"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30484.91797463415,
            "unit": "iter/sec",
            "range": "stddev: 0.000008111456527470986",
            "extra": "mean: 32.80310614029136 usec\nrounds: 13265"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13732.083344381,
            "unit": "iter/sec",
            "range": "stddev: 0.000011177581331244683",
            "extra": "mean: 72.8221621527798 usec\nrounds: 7943"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3779.2353021844224,
            "unit": "iter/sec",
            "range": "stddev: 0.00003142498756087415",
            "extra": "mean: 264.6037941649184 usec\nrounds: 3289"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2024.2833531349493,
            "unit": "iter/sec",
            "range": "stddev: 0.00002124925746467542",
            "extra": "mean: 494.0019876423569 usec\nrounds: 1861"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1047.3642332336608,
            "unit": "iter/sec",
            "range": "stddev: 0.000023580910828186082",
            "extra": "mean: 954.7776869490499 usec\nrounds: 888"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33182.77715040621,
            "unit": "iter/sec",
            "range": "stddev: 0.000010355367146563167",
            "extra": "mean: 30.136115354882477 usec\nrounds: 15101"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24645.620218335378,
            "unit": "iter/sec",
            "range": "stddev: 0.000010434393920740764",
            "extra": "mean: 40.57516066307144 usec\nrounds: 12828"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18933.431508286845,
            "unit": "iter/sec",
            "range": "stddev: 0.00025418540891550127",
            "extra": "mean: 52.81662753855881 usec\nrounds: 11024"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15276.467287280693,
            "unit": "iter/sec",
            "range": "stddev: 0.000011064547908549825",
            "extra": "mean: 65.46016046737506 usec\nrounds: 9404"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 676.5402450489506,
            "unit": "iter/sec",
            "range": "stddev: 0.00006242004260512207",
            "extra": "mean: 1.4781086673234727 msec\nrounds: 502"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1758512116506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24889.806039593466,
            "unit": "iter/sec",
            "range": "stddev: 0.000018305169391780166",
            "extra": "mean: 40.177090910602104 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3551.2601213696194,
            "unit": "iter/sec",
            "range": "stddev: 0.00032716146781605875",
            "extra": "mean: 281.59018653196506 usec\nrounds: 3163"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2041.4843714517656,
            "unit": "iter/sec",
            "range": "stddev: 0.0004540616274404911",
            "extra": "mean: 489.83965490211796 usec\nrounds: 1530"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7852.601436005506,
            "unit": "iter/sec",
            "range": "stddev: 0.00001777127012146203",
            "extra": "mean: 127.34633333290427 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5951.797696193339,
            "unit": "iter/sec",
            "range": "stddev: 0.00001249349950891461",
            "extra": "mean: 168.01646343584255 usec\nrounds: 3446"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31096.888341634705,
            "unit": "iter/sec",
            "range": "stddev: 0.000007681805900238917",
            "extra": "mean: 32.15755830660168 usec\nrounds: 14055"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13585.305837287287,
            "unit": "iter/sec",
            "range": "stddev: 0.000010982361072502483",
            "extra": "mean: 73.60894277810972 usec\nrounds: 7200"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3763.098753031415,
            "unit": "iter/sec",
            "range": "stddev: 0.000024027885863935225",
            "extra": "mean: 265.7384420736863 usec\nrounds: 3047"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2027.9120071734799,
            "unit": "iter/sec",
            "range": "stddev: 0.00001902965791707456",
            "extra": "mean: 493.1180428256392 usec\nrounds: 1798"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1038.063853371279,
            "unit": "iter/sec",
            "range": "stddev: 0.00003739603834187195",
            "extra": "mean: 963.3318766975071 usec\nrounds: 884"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33645.27457509597,
            "unit": "iter/sec",
            "range": "stddev: 0.000010380701478490484",
            "extra": "mean: 29.72185582162536 usec\nrounds: 14593"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24939.994741430437,
            "unit": "iter/sec",
            "range": "stddev: 0.000010478029511976325",
            "extra": "mean: 40.096239408535055 usec\nrounds: 13053"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19263.512847594564,
            "unit": "iter/sec",
            "range": "stddev: 0.00017696225545777884",
            "extra": "mean: 51.91161175594564 usec\nrounds: 11024"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15459.046482556381,
            "unit": "iter/sec",
            "range": "stddev: 0.000010967127693488494",
            "extra": "mean: 64.68704270527786 usec\nrounds: 9624"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 681.4160701321357,
            "unit": "iter/sec",
            "range": "stddev: 0.00005436213566039391",
            "extra": "mean: 1.4675321640214425 msec\nrounds: 567"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1758597216823,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25714.506124285865,
            "unit": "iter/sec",
            "range": "stddev: 0.000016861892672565973",
            "extra": "mean: 38.88855555563472 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3566.586280297695,
            "unit": "iter/sec",
            "range": "stddev: 0.0003523627730770182",
            "extra": "mean: 280.3801510492359 usec\nrounds: 3191"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2059.364117318449,
            "unit": "iter/sec",
            "range": "stddev: 0.0004855365341106932",
            "extra": "mean: 485.5867845760688 usec\nrounds: 1569"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8191.054712667391,
            "unit": "iter/sec",
            "range": "stddev: 0.000010280091407997463",
            "extra": "mean: 122.08440000449627 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6043.8995424722325,
            "unit": "iter/sec",
            "range": "stddev: 0.00001311556910908096",
            "extra": "mean: 165.45609220879837 usec\nrounds: 3427"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31251.7590151431,
            "unit": "iter/sec",
            "range": "stddev: 0.00000783450849561658",
            "extra": "mean: 31.99819886987635 usec\nrounds: 11324"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13805.317665384255,
            "unit": "iter/sec",
            "range": "stddev: 0.000010659908952056315",
            "extra": "mean: 72.4358558229646 usec\nrounds: 6929"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3930.5247684010205,
            "unit": "iter/sec",
            "range": "stddev: 0.000016188732419733435",
            "extra": "mean: 254.41895393698553 usec\nrounds: 3213"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2062.5932383493177,
            "unit": "iter/sec",
            "range": "stddev: 0.000021723327917200092",
            "extra": "mean: 484.8265675496418 usec\nrounds: 1547"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1044.0082882984243,
            "unit": "iter/sec",
            "range": "stddev: 0.00008209703892617006",
            "extra": "mean: 957.846801800634 usec\nrounds: 777"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33659.61751037368,
            "unit": "iter/sec",
            "range": "stddev: 0.000010475670592124164",
            "extra": "mean: 29.70919083355021 usec\nrounds: 15579"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24784.358875501483,
            "unit": "iter/sec",
            "range": "stddev: 0.000011239161315274564",
            "extra": "mean: 40.348027763125515 usec\nrounds: 13291"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 20104.634265568522,
            "unit": "iter/sec",
            "range": "stddev: 0.000010815359043166487",
            "extra": "mean: 49.7397757547181 usec\nrounds: 10765"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15023.588535582581,
            "unit": "iter/sec",
            "range": "stddev: 0.0002177330015802299",
            "extra": "mean: 66.56199333678185 usec\nrounds: 9905"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 680.1543533247805,
            "unit": "iter/sec",
            "range": "stddev: 0.00009016345379881463",
            "extra": "mean: 1.4702545019549262 msec\nrounds: 512"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1758683661336,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24997.861294167935,
            "unit": "iter/sec",
            "range": "stddev: 0.00001878847437941687",
            "extra": "mean: 40.00342222209636 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3539.458882323233,
            "unit": "iter/sec",
            "range": "stddev: 0.00034349321096331745",
            "extra": "mean: 282.52906256213356 usec\nrounds: 3021"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2065.685771520172,
            "unit": "iter/sec",
            "range": "stddev: 0.0004946097459059047",
            "extra": "mean: 484.1007348683453 usec\nrounds: 1520"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7948.266324213071,
            "unit": "iter/sec",
            "range": "stddev: 0.000010064010700377032",
            "extra": "mean: 125.81359999899178 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5986.5886214808,
            "unit": "iter/sec",
            "range": "stddev: 0.000013272338140899615",
            "extra": "mean: 167.04003953300656 usec\nrounds: 3769"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31223.143348416084,
            "unit": "iter/sec",
            "range": "stddev: 0.000007614022893087012",
            "extra": "mean: 32.027524866445866 usec\nrounds: 14779"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13818.701706865113,
            "unit": "iter/sec",
            "range": "stddev: 0.000010526656754897836",
            "extra": "mean: 72.36569840010377 usec\nrounds: 7626"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3839.6733830125636,
            "unit": "iter/sec",
            "range": "stddev: 0.000016123419273904157",
            "extra": "mean: 260.4388186829088 usec\nrounds: 3265"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2040.69991649475,
            "unit": "iter/sec",
            "range": "stddev: 0.000020563263402825402",
            "extra": "mean: 490.02795164399794 usec\nrounds: 1551"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1033.2067137524955,
            "unit": "iter/sec",
            "range": "stddev: 0.00007780041263420474",
            "extra": "mean: 967.8605323499185 usec\nrounds: 881"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33800.284888010756,
            "unit": "iter/sec",
            "range": "stddev: 0.000010475921566854172",
            "extra": "mean: 29.58554945064112 usec\nrounds: 16107"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24944.222177259773,
            "unit": "iter/sec",
            "range": "stddev: 0.000010421977514263055",
            "extra": "mean: 40.089444076217504 usec\nrounds: 13277"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19364.58285278795,
            "unit": "iter/sec",
            "range": "stddev: 0.00016824049047736974",
            "extra": "mean: 51.640668306780924 usec\nrounds: 11788"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15462.721411276973,
            "unit": "iter/sec",
            "range": "stddev: 0.000010680908555951427",
            "extra": "mean: 64.67166893860606 usec\nrounds: 10270"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 693.4059093883707,
            "unit": "iter/sec",
            "range": "stddev: 0.000052886599120173694",
            "extra": "mean: 1.4421567316639474 msec\nrounds: 559"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1758770175058,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24616.08480616378,
            "unit": "iter/sec",
            "range": "stddev: 0.000017840577218364627",
            "extra": "mean: 40.62384444457241 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3503.1276681185054,
            "unit": "iter/sec",
            "range": "stddev: 0.00036030148394762096",
            "extra": "mean: 285.4591938229559 usec\nrounds: 3173"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2011.26833633394,
            "unit": "iter/sec",
            "range": "stddev: 0.0004926938777661579",
            "extra": "mean: 497.19869891789784 usec\nrounds: 1571"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8126.487147087806,
            "unit": "iter/sec",
            "range": "stddev: 0.000007846376238256747",
            "extra": "mean: 123.05440000091039 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6015.435008808379,
            "unit": "iter/sec",
            "range": "stddev: 0.000013284514289419226",
            "extra": "mean: 166.2390165525359 usec\nrounds: 3504"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31491.01843119795,
            "unit": "iter/sec",
            "range": "stddev: 0.000007785064328092318",
            "extra": "mean: 31.755086047306314 usec\nrounds: 14585"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13070.54687769251,
            "unit": "iter/sec",
            "range": "stddev: 0.000015106725564894178",
            "extra": "mean: 76.5078928492808 usec\nrounds: 9090"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3840.5935034877834,
            "unit": "iter/sec",
            "range": "stddev: 0.000018879908262085432",
            "extra": "mean: 260.37642335536515 usec\nrounds: 3177"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2019.3577698236566,
            "unit": "iter/sec",
            "range": "stddev: 0.00003642402244112036",
            "extra": "mean: 495.2069489337328 usec\nrounds: 1782"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1037.7514231284686,
            "unit": "iter/sec",
            "range": "stddev: 0.000021369575084531484",
            "extra": "mean: 963.6219018474956 usec\nrounds: 866"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34169.861556403026,
            "unit": "iter/sec",
            "range": "stddev: 0.000010526223082152987",
            "extra": "mean: 29.265556090981935 usec\nrounds: 15359"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25230.39274456203,
            "unit": "iter/sec",
            "range": "stddev: 0.000010136219610369631",
            "extra": "mean: 39.63473775950367 usec\nrounds: 13827"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19328.343441751862,
            "unit": "iter/sec",
            "range": "stddev: 0.00019438820175234124",
            "extra": "mean: 51.73749126579898 usec\nrounds: 12079"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15556.426555157635,
            "unit": "iter/sec",
            "range": "stddev: 0.000010681004145977047",
            "extra": "mean: 64.28211494807952 usec\nrounds: 10309"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 685.383004568577,
            "unit": "iter/sec",
            "range": "stddev: 0.000052482886202923304",
            "extra": "mean: 1.4590382214532187 msec\nrounds: 578"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1758856506861,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25059.30702655004,
            "unit": "iter/sec",
            "range": "stddev: 0.000017347997769211425",
            "extra": "mean: 39.90533333346017 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3223.1419773641437,
            "unit": "iter/sec",
            "range": "stddev: 0.0004720721476936166",
            "extra": "mean: 310.2562676490568 usec\nrounds: 2918"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1932.3319645216102,
            "unit": "iter/sec",
            "range": "stddev: 0.0005877414618078407",
            "extra": "mean: 517.5094229979119 usec\nrounds: 1461"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7950.844697748323,
            "unit": "iter/sec",
            "range": "stddev: 0.00000791186355572336",
            "extra": "mean: 125.77279999987924 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5455.813066022693,
            "unit": "iter/sec",
            "range": "stddev: 0.000012993551810643407",
            "extra": "mean: 183.29073740222617 usec\nrounds: 3195"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 29614.973053662838,
            "unit": "iter/sec",
            "range": "stddev: 0.00000780802183922691",
            "extra": "mean: 33.76670301836786 usec\nrounds: 13186"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 12883.428531319087,
            "unit": "iter/sec",
            "range": "stddev: 0.000010808066103335725",
            "extra": "mean: 77.61909010237773 usec\nrounds: 7325"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3553.677039287105,
            "unit": "iter/sec",
            "range": "stddev: 0.00001618698225472506",
            "extra": "mean: 281.398672120359 usec\nrounds: 3056"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1847.0590247782748,
            "unit": "iter/sec",
            "range": "stddev: 0.000021980680257460197",
            "extra": "mean: 541.4012148962279 usec\nrounds: 1638"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 936.5743309064809,
            "unit": "iter/sec",
            "range": "stddev: 0.000040735363472745813",
            "extra": "mean: 1.0677209133333083 msec\nrounds: 750"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32269.81756785018,
            "unit": "iter/sec",
            "range": "stddev: 0.000011156526530970037",
            "extra": "mean: 30.98870943095388 usec\nrounds: 14007"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24068.461507952557,
            "unit": "iter/sec",
            "range": "stddev: 0.000010528760290969782",
            "extra": "mean: 41.54814796407265 usec\nrounds: 12672"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19322.321764442837,
            "unit": "iter/sec",
            "range": "stddev: 0.000010786928239196693",
            "extra": "mean: 51.75361492220939 usec\nrounds: 11312"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 14847.938204808122,
            "unit": "iter/sec",
            "range": "stddev: 0.000011229068882936088",
            "extra": "mean: 67.34941822940614 usec\nrounds: 9545"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 642.5712794306112,
            "unit": "iter/sec",
            "range": "stddev: 0.001425621941256747",
            "extra": "mean: 1.5562475821921424 msec\nrounds: 438"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1758942675581,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25014.34155568778,
            "unit": "iter/sec",
            "range": "stddev: 0.000017883132202861974",
            "extra": "mean: 39.97706666688651 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3511.149742246079,
            "unit": "iter/sec",
            "range": "stddev: 0.00031446435402704626",
            "extra": "mean: 284.80699298239017 usec\nrounds: 3135"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2041.4507923469894,
            "unit": "iter/sec",
            "range": "stddev: 0.0004409541082965651",
            "extra": "mean: 489.847712102006 usec\nrounds: 1570"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7887.911722639332,
            "unit": "iter/sec",
            "range": "stddev: 0.000008139842365916025",
            "extra": "mean: 126.77626666762384 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5962.462412354867,
            "unit": "iter/sec",
            "range": "stddev: 0.000014226959202425925",
            "extra": "mean: 167.7159419785845 usec\nrounds: 3740"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30793.82256595663,
            "unit": "iter/sec",
            "range": "stddev: 0.000007824868909869749",
            "extra": "mean: 32.47404565828492 usec\nrounds: 14280"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13675.41992683047,
            "unit": "iter/sec",
            "range": "stddev: 0.000011093670707104285",
            "extra": "mean: 73.123897134453 usec\nrounds: 8166"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3870.1848191013755,
            "unit": "iter/sec",
            "range": "stddev: 0.000014524663244891954",
            "extra": "mean: 258.3855931283901 usec\nrounds: 3318"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2026.11333360647,
            "unit": "iter/sec",
            "range": "stddev: 0.00001556624734563624",
            "extra": "mean: 493.55580628848924 usec\nrounds: 1781"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1039.2925522927394,
            "unit": "iter/sec",
            "range": "stddev: 0.00007610092874717978",
            "extra": "mean: 962.1929819413623 usec\nrounds: 886"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33761.668849597,
            "unit": "iter/sec",
            "range": "stddev: 0.000010378872522694011",
            "extra": "mean: 29.61938891275917 usec\nrounds: 11635"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24514.74368069738,
            "unit": "iter/sec",
            "range": "stddev: 0.000010553711786325891",
            "extra": "mean: 40.79177873629526 usec\nrounds: 13215"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19521.45522849563,
            "unit": "iter/sec",
            "range": "stddev: 0.00017275302738915287",
            "extra": "mean: 51.225689288792964 usec\nrounds: 11670"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15743.309598728403,
            "unit": "iter/sec",
            "range": "stddev: 0.000010836612098850246",
            "extra": "mean: 63.519045581163596 usec\nrounds: 10048"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 683.0968930608143,
            "unit": "iter/sec",
            "range": "stddev: 0.00005520346280317042",
            "extra": "mean: 1.4639211657356677 msec\nrounds: 537"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1759029579858,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25553.9384016327,
            "unit": "iter/sec",
            "range": "stddev: 0.000017694116703461558",
            "extra": "mean: 39.13291111072365 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3559.8839025327175,
            "unit": "iter/sec",
            "range": "stddev: 0.000293688714489988",
            "extra": "mean: 280.90803727855825 usec\nrounds: 3219"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2013.9902632843223,
            "unit": "iter/sec",
            "range": "stddev: 0.0005836826646051806",
            "extra": "mean: 496.5267301586881 usec\nrounds: 1134"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8118.7107054242715,
            "unit": "iter/sec",
            "range": "stddev: 0.00000955693938169181",
            "extra": "mean: 123.1722666669081 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5999.924481076131,
            "unit": "iter/sec",
            "range": "stddev: 0.000015474042989194396",
            "extra": "mean: 166.66876444095553 usec\nrounds: 3774"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30800.98855388335,
            "unit": "iter/sec",
            "range": "stddev: 0.000008113089382903506",
            "extra": "mean: 32.466490426130214 usec\nrounds: 14832"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13745.407004896188,
            "unit": "iter/sec",
            "range": "stddev: 0.000011569931923269676",
            "extra": "mean: 72.75157437271916 usec\nrounds: 8928"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3855.1597764001726,
            "unit": "iter/sec",
            "range": "stddev: 0.000012862881526690856",
            "extra": "mean: 259.39262131795965 usec\nrounds: 3293"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2019.3944645580345,
            "unit": "iter/sec",
            "range": "stddev: 0.00004713780490185778",
            "extra": "mean: 495.19795045038927 usec\nrounds: 1554"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1046.170501166916,
            "unit": "iter/sec",
            "range": "stddev: 0.000033459968629572993",
            "extra": "mean: 955.8671353135874 usec\nrounds: 909"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34493.39223178491,
            "unit": "iter/sec",
            "range": "stddev: 0.000010045317430746267",
            "extra": "mean: 28.991059889972835 usec\nrounds: 15996"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25319.31227105759,
            "unit": "iter/sec",
            "range": "stddev: 0.000010086990113350758",
            "extra": "mean: 39.495543531926664 usec\nrounds: 14185"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19480.457239892912,
            "unit": "iter/sec",
            "range": "stddev: 0.00019171651861292897",
            "extra": "mean: 51.33349734482399 usec\nrounds: 12052"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15647.511893324327,
            "unit": "iter/sec",
            "range": "stddev: 0.000010787597545937293",
            "extra": "mean: 63.90792394454919 usec\nrounds: 9309"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 667.209056245236,
            "unit": "iter/sec",
            "range": "stddev: 0.00009379415457197493",
            "extra": "mean: 1.49878061552037 msec\nrounds: 567"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1759116517079,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25048.674124812176,
            "unit": "iter/sec",
            "range": "stddev: 0.000018297213599614722",
            "extra": "mean: 39.92227273256917 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3540.413706265635,
            "unit": "iter/sec",
            "range": "stddev: 0.00032113012348198184",
            "extra": "mean: 282.4528665195972 usec\nrounds: 3169"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2038.0384132070128,
            "unit": "iter/sec",
            "range": "stddev: 0.00045679078202505625",
            "extra": "mean: 490.66788610054795 usec\nrounds: 1554"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8000.793678411691,
            "unit": "iter/sec",
            "range": "stddev: 0.000006609522899055842",
            "extra": "mean: 124.98760000501836 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5973.383882771316,
            "unit": "iter/sec",
            "range": "stddev: 0.000012504096899041971",
            "extra": "mean: 167.40929758160055 usec\nrounds: 3431"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30527.34057349379,
            "unit": "iter/sec",
            "range": "stddev: 0.000007821274481142632",
            "extra": "mean: 32.757521002935896 usec\nrounds: 12641"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13526.314836908263,
            "unit": "iter/sec",
            "range": "stddev: 0.000011331494450495464",
            "extra": "mean: 73.92996629587338 usec\nrounds: 8367"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3829.51790486882,
            "unit": "iter/sec",
            "range": "stddev: 0.000014949902576488172",
            "extra": "mean: 261.12947499960967 usec\nrounds: 2520"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2014.466156795419,
            "unit": "iter/sec",
            "range": "stddev: 0.000022018240881402022",
            "extra": "mean: 496.4094316634161 usec\nrounds: 1756"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1046.785853248183,
            "unit": "iter/sec",
            "range": "stddev: 0.000022300148879467938",
            "extra": "mean: 955.3052297153174 usec\nrounds: 875"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33672.33516954826,
            "unit": "iter/sec",
            "range": "stddev: 0.000010361776315140979",
            "extra": "mean: 29.697970009052263 usec\nrounds: 15638"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24427.2542164058,
            "unit": "iter/sec",
            "range": "stddev: 0.000010530414091103938",
            "extra": "mean: 40.93787992464504 usec\nrounds: 12667"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18959.795759557193,
            "unit": "iter/sec",
            "range": "stddev: 0.00018142198106882448",
            "extra": "mean: 52.743184192578816 usec\nrounds: 11716"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15309.149722479651,
            "unit": "iter/sec",
            "range": "stddev: 0.000010926291016701077",
            "extra": "mean: 65.32041413976245 usec\nrounds: 8444"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 687.2944834111116,
            "unit": "iter/sec",
            "range": "stddev: 0.00005311995435793696",
            "extra": "mean: 1.454980396520716 msec\nrounds: 517"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1759202059618,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25446.22787972413,
            "unit": "iter/sec",
            "range": "stddev: 0.000017277862038259898",
            "extra": "mean: 39.29855555513642 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3506.4167136350156,
            "unit": "iter/sec",
            "range": "stddev: 0.0002937628697458091",
            "extra": "mean: 285.19143093044545 usec\nrounds: 3149"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2051.3552164200933,
            "unit": "iter/sec",
            "range": "stddev: 0.0004173340807631867",
            "extra": "mean: 487.48261246784074 usec\nrounds: 1556"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7978.867702938983,
            "unit": "iter/sec",
            "range": "stddev: 0.000010965170226147157",
            "extra": "mean: 125.33106666647123 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5942.075703477658,
            "unit": "iter/sec",
            "range": "stddev: 0.000012876272760380434",
            "extra": "mean: 168.2913597709198 usec\nrounds: 3669"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 29069.945266191495,
            "unit": "iter/sec",
            "range": "stddev: 0.000010107791898254878",
            "extra": "mean: 34.399789571086856 usec\nrounds: 15131"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13474.26237127361,
            "unit": "iter/sec",
            "range": "stddev: 0.000010539962047921441",
            "extra": "mean: 74.21556538278082 usec\nrounds: 8412"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3823.1952783099696,
            "unit": "iter/sec",
            "range": "stddev: 0.00001340748089072782",
            "extra": "mean: 261.56131905510375 usec\nrounds: 3175"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1999.0810525940294,
            "unit": "iter/sec",
            "range": "stddev: 0.000015168498664041859",
            "extra": "mean: 500.229842458058 usec\nrounds: 1790"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1030.5209932489245,
            "unit": "iter/sec",
            "range": "stddev: 0.000023643796693294287",
            "extra": "mean: 970.3829485775921 usec\nrounds: 914"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32191.392504417177,
            "unit": "iter/sec",
            "range": "stddev: 0.000012333124839553919",
            "extra": "mean: 31.06420450320016 usec\nrounds: 15589"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24478.566601800787,
            "unit": "iter/sec",
            "range": "stddev: 0.000010248204576339785",
            "extra": "mean: 40.8520652482337 usec\nrounds: 13395"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18899.061524130022,
            "unit": "iter/sec",
            "range": "stddev: 0.00020268320716776233",
            "extra": "mean: 52.9126802790295 usec\nrounds: 11754"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15248.183891349745,
            "unit": "iter/sec",
            "range": "stddev: 0.000011486470650410156",
            "extra": "mean: 65.58158054267024 usec\nrounds: 8182"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 698.667492593556,
            "unit": "iter/sec",
            "range": "stddev: 0.00006299140454448195",
            "extra": "mean: 1.431296017920991 msec\nrounds: 558"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1759288895813,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25715.49066889136,
            "unit": "iter/sec",
            "range": "stddev: 0.00001896093580073136",
            "extra": "mean: 38.887066666385785 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3559.794079694575,
            "unit": "iter/sec",
            "range": "stddev: 0.000376077576885375",
            "extra": "mean: 280.91512531696736 usec\nrounds: 2761"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2061.3795118043995,
            "unit": "iter/sec",
            "range": "stddev: 0.00045967227834398236",
            "extra": "mean: 485.112030207705 usec\nrounds: 1589"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7923.8591095868705,
            "unit": "iter/sec",
            "range": "stddev: 0.000006421315997886222",
            "extra": "mean: 126.20113333288901 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5742.363332048336,
            "unit": "iter/sec",
            "range": "stddev: 0.00003518552285253368",
            "extra": "mean: 174.14432737457832 usec\nrounds: 3748"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31047.37186203947,
            "unit": "iter/sec",
            "range": "stddev: 0.000007743033693415952",
            "extra": "mean: 32.20884538773682 usec\nrounds: 14559"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13569.802180332481,
            "unit": "iter/sec",
            "range": "stddev: 0.00001068943594331221",
            "extra": "mean: 73.693041852103 usec\nrounds: 8315"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3818.292358769029,
            "unit": "iter/sec",
            "range": "stddev: 0.00002207132609058997",
            "extra": "mean: 261.8971796917059 usec\nrounds: 1881"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2002.6072461033452,
            "unit": "iter/sec",
            "range": "stddev: 0.00005430249776894282",
            "extra": "mean: 499.3490370844262 usec\nrounds: 1564"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1019.8380303578591,
            "unit": "iter/sec",
            "range": "stddev: 0.00007683299960495769",
            "extra": "mean: 980.547861751245 usec\nrounds: 868"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33351.469923627956,
            "unit": "iter/sec",
            "range": "stddev: 0.00001043083358132334",
            "extra": "mean: 29.983685945174695 usec\nrounds: 12501"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24570.780117047496,
            "unit": "iter/sec",
            "range": "stddev: 0.000010260606650397975",
            "extra": "mean: 40.69874848239711 usec\nrounds: 13673"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19675.051410986365,
            "unit": "iter/sec",
            "range": "stddev: 0.00001496141587959278",
            "extra": "mean: 50.82578841149098 usec\nrounds: 9613"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 14747.54190542894,
            "unit": "iter/sec",
            "range": "stddev: 0.00024217244518007095",
            "extra": "mean: 67.80791039026475 usec\nrounds: 9865"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 684.4291813695287,
            "unit": "iter/sec",
            "range": "stddev: 0.00005492720946798517",
            "extra": "mean: 1.461071542857101 msec\nrounds: 525"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1759374772186,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25008.89205090612,
            "unit": "iter/sec",
            "range": "stddev: 0.000018158315596643296",
            "extra": "mean: 39.9857777771394 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3526.9883103445745,
            "unit": "iter/sec",
            "range": "stddev: 0.0003093439130779732",
            "extra": "mean: 283.5280165423353 usec\nrounds: 3083"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2036.4541586023274,
            "unit": "iter/sec",
            "range": "stddev: 0.0004270218293280529",
            "extra": "mean: 491.04959999999534 usec\nrounds: 1560"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8153.046820824047,
            "unit": "iter/sec",
            "range": "stddev: 0.000006366425543572476",
            "extra": "mean: 122.65353333257661 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6003.708437938667,
            "unit": "iter/sec",
            "range": "stddev: 0.000013196150594127235",
            "extra": "mean: 166.56371813141268 usec\nrounds: 3789"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30607.00860504941,
            "unit": "iter/sec",
            "range": "stddev: 0.0000076553541331382",
            "extra": "mean: 32.672255328964894 usec\nrounds: 15200"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13602.023481254246,
            "unit": "iter/sec",
            "range": "stddev: 0.000011035955866205078",
            "extra": "mean: 73.51847329025415 usec\nrounds: 8817"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3781.728368860129,
            "unit": "iter/sec",
            "range": "stddev: 0.000023643556590220484",
            "extra": "mean: 264.42935675504776 usec\nrounds: 3131"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2022.3418867766675,
            "unit": "iter/sec",
            "range": "stddev: 0.000031147979870252184",
            "extra": "mean: 494.47623398329614 usec\nrounds: 1795"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1046.3313720356407,
            "unit": "iter/sec",
            "range": "stddev: 0.000023276473704199644",
            "extra": "mean: 955.7201730982196 usec\nrounds: 907"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33587.832024937015,
            "unit": "iter/sec",
            "range": "stddev: 0.000010480917387766403",
            "extra": "mean: 29.772686705636673 usec\nrounds: 15736"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24594.400943752833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000102678536257801",
            "extra": "mean: 40.659660801943936 usec\nrounds: 13243"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19089.36756423484,
            "unit": "iter/sec",
            "range": "stddev: 0.00021069949642402765",
            "extra": "mean: 52.38518230816428 usec\nrounds: 11689"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15611.505508710512,
            "unit": "iter/sec",
            "range": "stddev: 0.000010719532108112253",
            "extra": "mean: 64.05532121434703 usec\nrounds: 8334"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 691.1641024482359,
            "unit": "iter/sec",
            "range": "stddev: 0.00005160112865203056",
            "extra": "mean: 1.4468344007708271 msec\nrounds: 519"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1759461155367,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24921.80782995338,
            "unit": "iter/sec",
            "range": "stddev: 0.000020345757137320165",
            "extra": "mean: 40.12549999675809 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3504.2102251717506,
            "unit": "iter/sec",
            "range": "stddev: 0.0003507518707252642",
            "extra": "mean: 285.371006801108 usec\nrounds: 3088"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2034.1038641623168,
            "unit": "iter/sec",
            "range": "stddev: 0.00047842481572466975",
            "extra": "mean: 491.61698063624664 usec\nrounds: 1601"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7969.494898610972,
            "unit": "iter/sec",
            "range": "stddev: 0.000011723306303897639",
            "extra": "mean: 125.47846666848271 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5929.699379963039,
            "unit": "iter/sec",
            "range": "stddev: 0.000014951497245618132",
            "extra": "mean: 168.64261338088832 usec\nrounds: 3647"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30533.499170863906,
            "unit": "iter/sec",
            "range": "stddev: 0.000007969593751796659",
            "extra": "mean: 32.75091382104786 usec\nrounds: 14029"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13551.184132612318,
            "unit": "iter/sec",
            "range": "stddev: 0.000010734425871911388",
            "extra": "mean: 73.79428913473305 usec\nrounds: 7685"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3841.458427026959,
            "unit": "iter/sec",
            "range": "stddev: 0.00001528312576769333",
            "extra": "mean: 260.3177983039987 usec\nrounds: 3302"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2026.8086237880048,
            "unit": "iter/sec",
            "range": "stddev: 0.000014980338514844618",
            "extra": "mean: 493.38649355608607 usec\nrounds: 1552"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1036.71747046508,
            "unit": "iter/sec",
            "range": "stddev: 0.000040393420352190004",
            "extra": "mean: 964.5829538797988 usec\nrounds: 889"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33619.1736765603,
            "unit": "iter/sec",
            "range": "stddev: 0.00001046279798095913",
            "extra": "mean: 29.744930961739026 usec\nrounds: 15209"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24733.804165977657,
            "unit": "iter/sec",
            "range": "stddev: 0.000010212730222263392",
            "extra": "mean: 40.43049719685014 usec\nrounds: 13200"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19220.345459439206,
            "unit": "iter/sec",
            "range": "stddev: 0.00019362314597286365",
            "extra": "mean: 52.02820116372545 usec\nrounds: 11513"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15441.759114116216,
            "unit": "iter/sec",
            "range": "stddev: 0.000010573277817459144",
            "extra": "mean: 64.7594611863775 usec\nrounds: 9829"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 699.1138214993692,
            "unit": "iter/sec",
            "range": "stddev: 0.00004788259488519722",
            "extra": "mean: 1.4303822485662332 msec\nrounds: 523"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1759547337507,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25442.759321825535,
            "unit": "iter/sec",
            "range": "stddev: 0.000017455695111063413",
            "extra": "mean: 39.30391304461113 usec\nrounds: 46"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3508.952404476996,
            "unit": "iter/sec",
            "range": "stddev: 0.0002808158877546246",
            "extra": "mean: 284.98534170030973 usec\nrounds: 3187"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2065.3100041066505,
            "unit": "iter/sec",
            "range": "stddev: 0.0003908724353679673",
            "extra": "mean: 484.1888133072545 usec\nrounds: 1548"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8160.2543387447795,
            "unit": "iter/sec",
            "range": "stddev: 0.000010066828731899674",
            "extra": "mean: 122.54520000093788 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6040.255028894342,
            "unit": "iter/sec",
            "range": "stddev: 0.000014537494388054414",
            "extra": "mean: 165.55592358540665 usec\nrounds: 3782"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31199.418384556775,
            "unit": "iter/sec",
            "range": "stddev: 0.000007577773976377423",
            "extra": "mean: 32.051879547055414 usec\nrounds: 14213"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13652.707280818548,
            "unit": "iter/sec",
            "range": "stddev: 0.000012375697075455581",
            "extra": "mean: 73.24554606139955 usec\nrounds: 8988"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3880.8814011203795,
            "unit": "iter/sec",
            "range": "stddev: 0.000015434057620761025",
            "extra": "mean: 257.6734243183283 usec\nrounds: 3191"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2025.7421088856563,
            "unit": "iter/sec",
            "range": "stddev: 0.000020592341901936876",
            "extra": "mean: 493.64625221227766 usec\nrounds: 1582"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1040.1891424214,
            "unit": "iter/sec",
            "range": "stddev: 0.000024796352643996115",
            "extra": "mean: 961.3636205355444 usec\nrounds: 896"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33625.07237282468,
            "unit": "iter/sec",
            "range": "stddev: 0.000010216930701637825",
            "extra": "mean: 29.73971294135224 usec\nrounds: 16575"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24565.883406439723,
            "unit": "iter/sec",
            "range": "stddev: 0.000010193254987638679",
            "extra": "mean: 40.70686095244835 usec\nrounds: 13837"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19326.454212939938,
            "unit": "iter/sec",
            "range": "stddev: 0.00015032837470172744",
            "extra": "mean: 51.74254878737428 usec\nrounds: 12411"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15298.18837818247,
            "unit": "iter/sec",
            "range": "stddev: 0.000012752297597392177",
            "extra": "mean: 65.36721703768214 usec\nrounds: 10330"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 697.7490251688674,
            "unit": "iter/sec",
            "range": "stddev: 0.00005513165162814534",
            "extra": "mean: 1.433180074680839 msec\nrounds: 549"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1759634292608,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24494.344867914584,
            "unit": "iter/sec",
            "range": "stddev: 0.000021314398363944082",
            "extra": "mean: 40.825750000356656 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3542.1529238845524,
            "unit": "iter/sec",
            "range": "stddev: 0.00038130556325814636",
            "extra": "mean: 282.31418052480234 usec\nrounds: 3163"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2047.3381309552894,
            "unit": "iter/sec",
            "range": "stddev: 0.0005418979213016748",
            "extra": "mean: 488.43910289181173 usec\nrounds: 1487"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8025.377313107702,
            "unit": "iter/sec",
            "range": "stddev: 0.000007600589224694713",
            "extra": "mean: 124.60473333343694 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5979.2510587254665,
            "unit": "iter/sec",
            "range": "stddev: 0.000015986455057403837",
            "extra": "mean: 167.24502620452927 usec\nrounds: 3549"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31026.57353189598,
            "unit": "iter/sec",
            "range": "stddev: 0.000007738839312162002",
            "extra": "mean: 32.23043624111372 usec\nrounds: 13951"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13647.509173057211,
            "unit": "iter/sec",
            "range": "stddev: 0.000010844107581283288",
            "extra": "mean: 73.27344406363842 usec\nrounds: 7294"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3898.1257331794686,
            "unit": "iter/sec",
            "range": "stddev: 0.00001559798970399057",
            "extra": "mean: 256.5335416167707 usec\nrounds: 3340"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2048.6637960268777,
            "unit": "iter/sec",
            "range": "stddev: 0.000016423865246916997",
            "extra": "mean: 488.1230399733586 usec\nrounds: 1501"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1010.8222876662066,
            "unit": "iter/sec",
            "range": "stddev: 0.00014730379279255618",
            "extra": "mean: 989.2935802877939 usec\nrounds: 903"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33384.69190659429,
            "unit": "iter/sec",
            "range": "stddev: 0.00001070423889688635",
            "extra": "mean: 29.953848392486602 usec\nrounds: 11477"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24542.872320246912,
            "unit": "iter/sec",
            "range": "stddev: 0.000010283805901881978",
            "extra": "mean: 40.745027189626825 usec\nrounds: 12799"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19343.312413821106,
            "unit": "iter/sec",
            "range": "stddev: 0.00020374943814639748",
            "extra": "mean: 51.69745380762625 usec\nrounds: 11582"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15491.90032024099,
            "unit": "iter/sec",
            "range": "stddev: 0.0000113030392039877",
            "extra": "mean: 64.54986020620382 usec\nrounds: 9700"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 687.3626547751036,
            "unit": "iter/sec",
            "range": "stddev: 0.00005748967260000978",
            "extra": "mean: 1.4548360942408014 msec\nrounds: 573"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1759720611737,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25047.926004362558,
            "unit": "iter/sec",
            "range": "stddev: 0.00001731762365401731",
            "extra": "mean: 39.92346511347213 usec\nrounds: 43"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3519.3089123170953,
            "unit": "iter/sec",
            "range": "stddev: 0.00037792244771272447",
            "extra": "mean: 284.14669610278827 usec\nrounds: 3182"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2031.5993091435182,
            "unit": "iter/sec",
            "range": "stddev: 0.0005285764060160032",
            "extra": "mean: 492.22304590248166 usec\nrounds: 1525"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8037.288733383239,
            "unit": "iter/sec",
            "range": "stddev: 0.000010005202100877662",
            "extra": "mean: 124.42006666333327 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5932.403320929264,
            "unit": "iter/sec",
            "range": "stddev: 0.000013020753802138975",
            "extra": "mean: 168.56574745551148 usec\nrounds: 3734"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30824.795813218992,
            "unit": "iter/sec",
            "range": "stddev: 0.000007643756111482808",
            "extra": "mean: 32.441415218431295 usec\nrounds: 10645"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13622.191307868512,
            "unit": "iter/sec",
            "range": "stddev: 0.0000104539615786207",
            "extra": "mean: 73.40962826020329 usec\nrounds: 8627"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3826.6898388743352,
            "unit": "iter/sec",
            "range": "stddev: 0.00001577584960866696",
            "extra": "mean: 261.32245938546237 usec\nrounds: 3287"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2008.5325798112885,
            "unit": "iter/sec",
            "range": "stddev: 0.000020422420172178743",
            "extra": "mean: 497.8759170010351 usec\nrounds: 1747"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1018.1661501960706,
            "unit": "iter/sec",
            "range": "stddev: 0.00007971781311202364",
            "extra": "mean: 982.1579707864258 usec\nrounds: 890"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33350.50937688576,
            "unit": "iter/sec",
            "range": "stddev: 0.000010422962724654167",
            "extra": "mean: 29.98454952214523 usec\nrounds: 15912"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24012.250966607993,
            "unit": "iter/sec",
            "range": "stddev: 0.000011353685633236188",
            "extra": "mean: 41.645408478806246 usec\nrounds: 5567"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19100.76020371462,
            "unit": "iter/sec",
            "range": "stddev: 0.0002024117431833244",
            "extra": "mean: 52.35393719070537 usec\nrounds: 11909"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15489.955711707385,
            "unit": "iter/sec",
            "range": "stddev: 0.000010752349145901174",
            "extra": "mean: 64.55796379354365 usec\nrounds: 10081"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 694.0477553640972,
            "unit": "iter/sec",
            "range": "stddev: 0.00005796758729521776",
            "extra": "mean: 1.4408230446266634 msec\nrounds: 493"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1759806815586,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25154.54673960972,
            "unit": "iter/sec",
            "range": "stddev: 0.000018238531771791586",
            "extra": "mean: 39.754244445412546 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3599.387185361237,
            "unit": "iter/sec",
            "range": "stddev: 0.00028846952011887654",
            "extra": "mean: 277.8250709084633 usec\nrounds: 3159"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2049.872434109791,
            "unit": "iter/sec",
            "range": "stddev: 0.00046181921074144424",
            "extra": "mean: 487.83523470048294 usec\nrounds: 1585"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7942.79493165193,
            "unit": "iter/sec",
            "range": "stddev: 0.000006574976585598146",
            "extra": "mean: 125.90026666998712 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6053.332420203756,
            "unit": "iter/sec",
            "range": "stddev: 0.000011839649268324034",
            "extra": "mean: 165.19826280519052 usec\nrounds: 3729"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31330.795293571085,
            "unit": "iter/sec",
            "range": "stddev: 0.000007894675359498456",
            "extra": "mean: 31.91747897332165 usec\nrounds: 13673"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13763.505181958408,
            "unit": "iter/sec",
            "range": "stddev: 0.00001052320142343449",
            "extra": "mean: 72.65591045156349 usec\nrounds: 8152"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3905.232341657631,
            "unit": "iter/sec",
            "range": "stddev: 0.000013959928477660161",
            "extra": "mean: 256.0667106366163 usec\nrounds: 2623"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2050.2850900807944,
            "unit": "iter/sec",
            "range": "stddev: 0.000016554180566027318",
            "extra": "mean: 487.7370492708376 usec\nrounds: 1644"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1033.1489742394704,
            "unit": "iter/sec",
            "range": "stddev: 0.000110012779173357",
            "extra": "mean: 967.9146230930809 usec\nrounds: 918"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34336.518720991626,
            "unit": "iter/sec",
            "range": "stddev: 0.000010210124727402003",
            "extra": "mean: 29.123511562884506 usec\nrounds: 16086"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24857.509652046483,
            "unit": "iter/sec",
            "range": "stddev: 0.00001013391846872407",
            "extra": "mean: 40.22929142934765 usec\nrounds: 13348"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19172.506751088727,
            "unit": "iter/sec",
            "range": "stddev: 0.00021087551538028098",
            "extra": "mean: 52.158020491671714 usec\nrounds: 8540"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15654.662849505226,
            "unit": "iter/sec",
            "range": "stddev: 0.000010796984433157343",
            "extra": "mean: 63.87873118785215 usec\nrounds: 8731"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 680.4580852029455,
            "unit": "iter/sec",
            "range": "stddev: 0.00006817838053586651",
            "extra": "mean: 1.4695982335219833 msec\nrounds: 531"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1759893193966,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24904.077794320572,
            "unit": "iter/sec",
            "range": "stddev: 0.00001703894388502844",
            "extra": "mean: 40.15406666566277 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3514.5493045573617,
            "unit": "iter/sec",
            "range": "stddev: 0.0003192999957935514",
            "extra": "mean: 284.5315041400293 usec\nrounds: 3019"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1988.2658734440488,
            "unit": "iter/sec",
            "range": "stddev: 0.00042946317493579257",
            "extra": "mean: 502.95084442998194 usec\nrounds: 1517"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7935.462470882079,
            "unit": "iter/sec",
            "range": "stddev: 0.000007147054286577746",
            "extra": "mean: 126.0165999989719 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5955.6595051614095,
            "unit": "iter/sec",
            "range": "stddev: 0.00001299805210939683",
            "extra": "mean: 167.9075170656349 usec\nrounds: 3721"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 29415.151872115075,
            "unit": "iter/sec",
            "range": "stddev: 0.000009533168239025082",
            "extra": "mean: 33.99608488671372 usec\nrounds: 10944"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13304.112665950777,
            "unit": "iter/sec",
            "range": "stddev: 0.000010814384714878639",
            "extra": "mean: 75.1647272620669 usec\nrounds: 8664"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3857.5555054656725,
            "unit": "iter/sec",
            "range": "stddev: 0.000016407905732515302",
            "extra": "mean: 259.23152591923184 usec\nrounds: 3318"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2027.4269247943232,
            "unit": "iter/sec",
            "range": "stddev: 0.00002568622551300227",
            "extra": "mean: 493.236026300404 usec\nrounds: 1787"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1046.5545829354292,
            "unit": "iter/sec",
            "range": "stddev: 0.00002439259657269986",
            "extra": "mean: 955.5163355122382 usec\nrounds: 918"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32637.158983368234,
            "unit": "iter/sec",
            "range": "stddev: 0.000010045304974820408",
            "extra": "mean: 30.63992182988709 usec\nrounds: 15978"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24043.89719673816,
            "unit": "iter/sec",
            "range": "stddev: 0.000010143396105194153",
            "extra": "mean: 41.59059539381419 usec\nrounds: 13460"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18582.546377002007,
            "unit": "iter/sec",
            "range": "stddev: 0.00020285925662055407",
            "extra": "mean: 53.813938074580165 usec\nrounds: 9899"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15010.648159538261,
            "unit": "iter/sec",
            "range": "stddev: 0.00001271382036206756",
            "extra": "mean: 66.61937508438415 usec\nrounds: 8878"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 683.2619804884862,
            "unit": "iter/sec",
            "range": "stddev: 0.00005951032061823795",
            "extra": "mean: 1.4635674581001383 msec\nrounds: 537"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1759979721268,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 23920.765725338788,
            "unit": "iter/sec",
            "range": "stddev: 0.000021493314585613285",
            "extra": "mean: 41.804681818388445 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3496.6566676475986,
            "unit": "iter/sec",
            "range": "stddev: 0.0004728951965519509",
            "extra": "mean: 285.9874717619209 usec\nrounds: 2957"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1950.0603893214868,
            "unit": "iter/sec",
            "range": "stddev: 0.0006673723316590504",
            "extra": "mean: 512.8046318339633 usec\nrounds: 1445"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7817.556982192889,
            "unit": "iter/sec",
            "range": "stddev: 0.000009675072199873682",
            "extra": "mean: 127.91719999967201 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5877.545875978679,
            "unit": "iter/sec",
            "range": "stddev: 0.000014097042477026515",
            "extra": "mean: 170.13903780606194 usec\nrounds: 3227"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30055.529877182085,
            "unit": "iter/sec",
            "range": "stddev: 0.000007848812232171817",
            "extra": "mean: 33.27174746498786 usec\nrounds: 13511"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13345.30538956253,
            "unit": "iter/sec",
            "range": "stddev: 0.000011289287000935905",
            "extra": "mean: 74.9327175968643 usec\nrounds: 5393"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3810.988198139053,
            "unit": "iter/sec",
            "range": "stddev: 0.00001688522226339928",
            "extra": "mean: 262.3991332453642 usec\nrounds: 3032"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2023.4518654899045,
            "unit": "iter/sec",
            "range": "stddev: 0.000020965999681826062",
            "extra": "mean: 494.2049855769051 usec\nrounds: 1456"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1042.7365357327776,
            "unit": "iter/sec",
            "range": "stddev: 0.00004166421467722039",
            "extra": "mean: 959.015020315995 usec\nrounds: 886"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33196.07193996845,
            "unit": "iter/sec",
            "range": "stddev: 0.000010139120872341754",
            "extra": "mean: 30.124046056063293 usec\nrounds: 15112"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24323.44690703082,
            "unit": "iter/sec",
            "range": "stddev: 0.000010225840386135413",
            "extra": "mean: 41.11259410815434 usec\nrounds: 11779"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19681.07698219206,
            "unit": "iter/sec",
            "range": "stddev: 0.00001053659962559496",
            "extra": "mean: 50.8102275553734 usec\nrounds: 11417"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 14333.64844089072,
            "unit": "iter/sec",
            "range": "stddev: 0.0002665025814163397",
            "extra": "mean: 69.76590810942605 usec\nrounds: 8336"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 667.5845551367286,
            "unit": "iter/sec",
            "range": "stddev: 0.00006659992776081495",
            "extra": "mean: 1.4979375905351633 msec\nrounds: 486"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1760066159886,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24653.2713492914,
            "unit": "iter/sec",
            "range": "stddev: 0.000019020592162651075",
            "extra": "mean: 40.562568181392386 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3549.981897437098,
            "unit": "iter/sec",
            "range": "stddev: 0.000435654323639211",
            "extra": "mean: 281.6915772787315 usec\nrounds: 3028"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1994.4546470128123,
            "unit": "iter/sec",
            "range": "stddev: 0.0006230748161629243",
            "extra": "mean: 501.39019280169975 usec\nrounds: 1556"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7990.360429205451,
            "unit": "iter/sec",
            "range": "stddev: 0.000007882407402171996",
            "extra": "mean: 125.15079999957378 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5966.934818346247,
            "unit": "iter/sec",
            "range": "stddev: 0.00001954294660819479",
            "extra": "mean: 167.59023358615352 usec\nrounds: 3168"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30145.332496087896,
            "unit": "iter/sec",
            "range": "stddev: 0.000007654286643107237",
            "extra": "mean: 33.172631289761846 usec\nrounds: 14567"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13470.308687299907,
            "unit": "iter/sec",
            "range": "stddev: 0.00001097996214024308",
            "extra": "mean: 74.23734846869702 usec\nrounds: 7510"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3867.162292924249,
            "unit": "iter/sec",
            "range": "stddev: 0.000013499122924054713",
            "extra": "mean: 258.58754410946267 usec\nrounds: 3310"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2034.6512608748453,
            "unit": "iter/sec",
            "range": "stddev: 0.000021806854339222713",
            "extra": "mean: 491.4847174203342 usec\nrounds: 1504"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1046.414922090442,
            "unit": "iter/sec",
            "range": "stddev: 0.00002404765043596691",
            "extra": "mean: 955.6438644837767 usec\nrounds: 856"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32793.4395388627,
            "unit": "iter/sec",
            "range": "stddev: 0.000010264442596645511",
            "extra": "mean: 30.493904087582045 usec\nrounds: 15535"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24270.197775698092,
            "unit": "iter/sec",
            "range": "stddev: 0.000010406787770092826",
            "extra": "mean: 41.20279567731033 usec\nrounds: 13371"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19462.122084504656,
            "unit": "iter/sec",
            "range": "stddev: 0.000010535889518469684",
            "extra": "mean: 51.381858342990235 usec\nrounds: 11069"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 14680.375532381926,
            "unit": "iter/sec",
            "range": "stddev: 0.0002976212935233751",
            "extra": "mean: 68.11814846249696 usec\nrounds: 9201"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 639.7657065162186,
            "unit": "iter/sec",
            "range": "stddev: 0.00009067344577900196",
            "extra": "mean: 1.5630722150541672 msec\nrounds: 465"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1760152245160,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25613.889247720224,
            "unit": "iter/sec",
            "range": "stddev: 0.000017773195275348484",
            "extra": "mean: 39.04131818204865 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3554.024782048291,
            "unit": "iter/sec",
            "range": "stddev: 0.0003385218826798628",
            "extra": "mean: 281.37113873012163 usec\nrounds: 3150"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2084.3447830746995,
            "unit": "iter/sec",
            "range": "stddev: 0.0003944779892721847",
            "extra": "mean: 479.7670750636852 usec\nrounds: 1572"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8090.985832661105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000109946001269566",
            "extra": "mean: 123.59433333368011 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6013.655932334876,
            "unit": "iter/sec",
            "range": "stddev: 0.000013145831518475384",
            "extra": "mean: 166.28819660650885 usec\nrounds: 3713"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31903.3265705182,
            "unit": "iter/sec",
            "range": "stddev: 0.00000773369069819339",
            "extra": "mean: 31.344693719936345 usec\nrounds: 15796"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13737.202003499566,
            "unit": "iter/sec",
            "range": "stddev: 0.000010848550165745816",
            "extra": "mean: 72.79502767341188 usec\nrounds: 8781"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3814.442847054392,
            "unit": "iter/sec",
            "range": "stddev: 0.000016170754417311163",
            "extra": "mean: 262.16148467717244 usec\nrounds: 3361"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1984.8532199462607,
            "unit": "iter/sec",
            "range": "stddev: 0.00004034359079963112",
            "extra": "mean: 503.81559197968033 usec\nrounds: 1571"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1027.7814648456044,
            "unit": "iter/sec",
            "range": "stddev: 0.000036692565129783993",
            "extra": "mean: 972.9694825253753 usec\nrounds: 887"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 35076.341547365926,
            "unit": "iter/sec",
            "range": "stddev: 0.000010498900592016953",
            "extra": "mean: 28.509244575852737 usec\nrounds: 16915"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25537.372775237243,
            "unit": "iter/sec",
            "range": "stddev: 0.000010549180888999494",
            "extra": "mean: 39.15829591404435 usec\nrounds: 14146"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19800.34876747211,
            "unit": "iter/sec",
            "range": "stddev: 0.00016449968891200882",
            "extra": "mean: 50.504160898559206 usec\nrounds: 10951"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15798.428429502186,
            "unit": "iter/sec",
            "range": "stddev: 0.000011274032290478963",
            "extra": "mean: 63.29743521403605 usec\nrounds: 10581"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 681.9523557714234,
            "unit": "iter/sec",
            "range": "stddev: 0.000056626823022277117",
            "extra": "mean: 1.4663781003715453 msec\nrounds: 538"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1760239004009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25447.393451875858,
            "unit": "iter/sec",
            "range": "stddev: 0.00001798914773738723",
            "extra": "mean: 39.296755555382234 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3526.4606937027006,
            "unit": "iter/sec",
            "range": "stddev: 0.00040038610853125904",
            "extra": "mean: 283.5704370066361 usec\nrounds: 3167"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2066.189986812688,
            "unit": "iter/sec",
            "range": "stddev: 0.0006915199024774065",
            "extra": "mean: 483.98259907483316 usec\nrounds: 1297"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7816.913298904552,
            "unit": "iter/sec",
            "range": "stddev: 0.000013548028857526437",
            "extra": "mean: 127.92773333435056 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5919.27586584743,
            "unit": "iter/sec",
            "range": "stddev: 0.00001543659194179844",
            "extra": "mean: 168.93958360172414 usec\nrounds: 3415"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31370.35231363547,
            "unit": "iter/sec",
            "range": "stddev: 0.000008102230746541288",
            "extra": "mean: 31.877232043879182 usec\nrounds: 13881"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13522.789020292415,
            "unit": "iter/sec",
            "range": "stddev: 0.000012888489207973079",
            "extra": "mean: 73.94924216442267 usec\nrounds: 7817"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3837.3370256732755,
            "unit": "iter/sec",
            "range": "stddev: 0.000024369151441133468",
            "extra": "mean: 260.59738649735783 usec\nrounds: 3229"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2029.2739868351637,
            "unit": "iter/sec",
            "range": "stddev: 0.000016559450693564783",
            "extra": "mean: 492.7870787717485 usec\nrounds: 1498"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1038.245241801369,
            "unit": "iter/sec",
            "range": "stddev: 0.000022101587447554018",
            "extra": "mean: 963.1635761363923 usec\nrounds: 880"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34114.08561559545,
            "unit": "iter/sec",
            "range": "stddev: 0.000010548277336797895",
            "extra": "mean: 29.313404769754236 usec\nrounds: 15179"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24942.898483188077,
            "unit": "iter/sec",
            "range": "stddev: 0.000010352076722288328",
            "extra": "mean: 40.091571581948116 usec\nrounds: 13041"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19173.51010762456,
            "unit": "iter/sec",
            "range": "stddev: 0.00023767505822376594",
            "extra": "mean: 52.15529104409207 usec\nrounds: 11311"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15464.726524721133,
            "unit": "iter/sec",
            "range": "stddev: 0.000012116793707535055",
            "extra": "mean: 64.66328378982004 usec\nrounds: 8908"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 634.078002693505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000937600069681742",
            "extra": "mean: 1.577093032327398 msec\nrounds: 464"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1760325660074,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25270.71960214884,
            "unit": "iter/sec",
            "range": "stddev: 0.00001788636718450385",
            "extra": "mean: 39.57148889084136 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3554.7874823302986,
            "unit": "iter/sec",
            "range": "stddev: 0.000296747704306118",
            "extra": "mean: 281.31076891957036 usec\nrounds: 3211"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2038.1443682127288,
            "unit": "iter/sec",
            "range": "stddev: 0.0004553310906194209",
            "extra": "mean: 490.6423782319753 usec\nrounds: 1470"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 6664.643577167937,
            "unit": "iter/sec",
            "range": "stddev: 0.000013094419310031597",
            "extra": "mean: 150.04553333142212 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5944.772963333992,
            "unit": "iter/sec",
            "range": "stddev: 0.00001275639134412003",
            "extra": "mean: 168.21500268685998 usec\nrounds: 3722"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31575.630036285846,
            "unit": "iter/sec",
            "range": "stddev: 0.000008102174524524091",
            "extra": "mean: 31.66999356310001 usec\nrounds: 13982"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13696.377816086297,
            "unit": "iter/sec",
            "range": "stddev: 0.000010902006055735535",
            "extra": "mean: 73.01200459186423 usec\nrounds: 8275"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3804.6448240773416,
            "unit": "iter/sec",
            "range": "stddev: 0.000017067851415672277",
            "extra": "mean: 262.83662371625144 usec\nrounds: 3213"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1983.4195619022996,
            "unit": "iter/sec",
            "range": "stddev: 0.00002519909539129362",
            "extra": "mean: 504.1797606558338 usec\nrounds: 1525"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1021.9710757526304,
            "unit": "iter/sec",
            "range": "stddev: 0.00008797889638675678",
            "extra": "mean: 978.5012743766257 usec\nrounds: 882"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34369.98212329331,
            "unit": "iter/sec",
            "range": "stddev: 0.000010460171853273635",
            "extra": "mean: 29.09515624456137 usec\nrounds: 11354"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25220.83156143061,
            "unit": "iter/sec",
            "range": "stddev: 0.000010339899311768613",
            "extra": "mean: 39.64976323497863 usec\nrounds: 12958"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19986.33358550559,
            "unit": "iter/sec",
            "range": "stddev: 0.00001067260342145825",
            "extra": "mean: 50.034189398560635 usec\nrounds: 11489"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15219.112565423862,
            "unit": "iter/sec",
            "range": "stddev: 0.00020477454411056863",
            "extra": "mean: 65.70685351732592 usec\nrounds: 9496"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 673.3232583470609,
            "unit": "iter/sec",
            "range": "stddev: 0.000058933894359018444",
            "extra": "mean: 1.4851707372397869 msec\nrounds: 529"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1760411767693,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24637.079027810225,
            "unit": "iter/sec",
            "range": "stddev: 0.000021383905012216618",
            "extra": "mean: 40.589227272892394 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3468.899263583467,
            "unit": "iter/sec",
            "range": "stddev: 0.00043647735358355073",
            "extra": "mean: 288.2758835051822 usec\nrounds: 1940"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2032.8712339118943,
            "unit": "iter/sec",
            "range": "stddev: 0.0005146528172641817",
            "extra": "mean: 491.9150722968716 usec\nrounds: 1563"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8008.6322377733495,
            "unit": "iter/sec",
            "range": "stddev: 0.000007621247948997686",
            "extra": "mean: 124.86526666606325 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5954.9710484652105,
            "unit": "iter/sec",
            "range": "stddev: 0.000012358340222309131",
            "extra": "mean: 167.926928923984 usec\nrounds: 3039"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31975.76187901254,
            "unit": "iter/sec",
            "range": "stddev: 0.00000782897885912438",
            "extra": "mean: 31.273687982282453 usec\nrounds: 13996"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13564.330410390314,
            "unit": "iter/sec",
            "range": "stddev: 0.000011500402007769699",
            "extra": "mean: 73.72276918542158 usec\nrounds: 5082"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3765.1583780926226,
            "unit": "iter/sec",
            "range": "stddev: 0.00001836202074437446",
            "extra": "mean: 265.5930772576388 usec\nrounds: 2990"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1815.7843997839866,
            "unit": "iter/sec",
            "range": "stddev: 0.00013178317426928773",
            "extra": "mean: 550.7261765873549 usec\nrounds: 1512"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1014.3057027432206,
            "unit": "iter/sec",
            "range": "stddev: 0.00010414382607077886",
            "extra": "mean: 985.8960639730899 usec\nrounds: 891"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33318.77133686787,
            "unit": "iter/sec",
            "range": "stddev: 0.000011492747886273618",
            "extra": "mean: 30.013111524718216 usec\nrounds: 14508"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24655.704546752317,
            "unit": "iter/sec",
            "range": "stddev: 0.000010696925264063776",
            "extra": "mean: 40.5585651833146 usec\nrounds: 12764"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19577.62071408593,
            "unit": "iter/sec",
            "range": "stddev: 0.00020015158076431704",
            "extra": "mean: 51.07872987244608 usec\nrounds: 10980"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15712.44249418381,
            "unit": "iter/sec",
            "range": "stddev: 0.000010810606020803108",
            "extra": "mean: 63.6438287917467 usec\nrounds: 9725"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 658.2133350319461,
            "unit": "iter/sec",
            "range": "stddev: 0.00022805306193268604",
            "extra": "mean: 1.5192642670350418 msec\nrounds: 543"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1760498284910,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25592.61112869518,
            "unit": "iter/sec",
            "range": "stddev: 0.00001871094888993281",
            "extra": "mean: 39.073777777945104 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3555.132570507022,
            "unit": "iter/sec",
            "range": "stddev: 0.0003290797884565866",
            "extra": "mean: 281.28346275913503 usec\nrounds: 3088"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2077.9843949079545,
            "unit": "iter/sec",
            "range": "stddev: 0.0004440492226334057",
            "extra": "mean: 481.23556772152546 usec\nrounds: 1580"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7898.420000017099,
            "unit": "iter/sec",
            "range": "stddev: 0.000011425125955020172",
            "extra": "mean: 126.60760000073878 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6043.857539057642,
            "unit": "iter/sec",
            "range": "stddev: 0.000012491654278414777",
            "extra": "mean: 165.45724209044147 usec\nrounds: 3540"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 32266.764803262795,
            "unit": "iter/sec",
            "range": "stddev: 0.000008125269352944242",
            "extra": "mean: 30.991641278486043 usec\nrounds: 14298"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13282.80456208233,
            "unit": "iter/sec",
            "range": "stddev: 0.00001568015609133863",
            "extra": "mean: 75.2853055486974 usec\nrounds: 8146"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3562.2449531557795,
            "unit": "iter/sec",
            "range": "stddev: 0.0000680454113951076",
            "extra": "mean: 280.721851851907 usec\nrounds: 1566"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2016.1928658980953,
            "unit": "iter/sec",
            "range": "stddev: 0.000026374002698184617",
            "extra": "mean: 495.9842964004134 usec\nrounds: 1778"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1037.919512421129,
            "unit": "iter/sec",
            "range": "stddev: 0.0000328283846383811",
            "extra": "mean: 963.4658449259952 usec\nrounds: 877"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34906.58779988623,
            "unit": "iter/sec",
            "range": "stddev: 0.000010245290805222938",
            "extra": "mean: 28.647887491405253 usec\nrounds: 15981"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25017.804747953058,
            "unit": "iter/sec",
            "range": "stddev: 0.000010329583611277713",
            "extra": "mean: 39.971532677415254 usec\nrounds: 12501"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19585.51264358245,
            "unit": "iter/sec",
            "range": "stddev: 0.00019146793092467617",
            "extra": "mean: 51.058147836006135 usec\nrounds: 11391"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15418.130328972748,
            "unit": "iter/sec",
            "range": "stddev: 0.000014116291652471422",
            "extra": "mean: 64.8587071624933 usec\nrounds: 9466"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 636.0182255830913,
            "unit": "iter/sec",
            "range": "stddev: 0.00011026680459473503",
            "extra": "mean: 1.5722819878050132 msec\nrounds: 492"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1760584675037,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24926.770686024178,
            "unit": "iter/sec",
            "range": "stddev: 0.000018498652890681305",
            "extra": "mean: 40.117511112687986 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3512.030342486884,
            "unit": "iter/sec",
            "range": "stddev: 0.00030445293131553785",
            "extra": "mean: 284.7355809835902 usec\nrounds: 3050"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2035.3313842073069,
            "unit": "iter/sec",
            "range": "stddev: 0.0004284819290603983",
            "extra": "mean: 491.3204836122872 usec\nrounds: 1495"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8155.635625628768,
            "unit": "iter/sec",
            "range": "stddev: 0.000007388657350335492",
            "extra": "mean: 122.61460000217994 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5856.6408420701555,
            "unit": "iter/sec",
            "range": "stddev: 0.000015173435611663857",
            "extra": "mean: 170.74634196733984 usec\nrounds: 3629"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30865.825725905812,
            "unit": "iter/sec",
            "range": "stddev: 0.000008280812988299964",
            "extra": "mean: 32.39829087613541 usec\nrounds: 14972"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13387.859303736708,
            "unit": "iter/sec",
            "range": "stddev: 0.000010678562143471678",
            "extra": "mean: 74.69454057684102 usec\nrounds: 8219"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3805.8396807090962,
            "unit": "iter/sec",
            "range": "stddev: 0.000016239826843308575",
            "extra": "mean: 262.7541052422056 usec\nrounds: 2499"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1978.5204397572181,
            "unit": "iter/sec",
            "range": "stddev: 0.00003407011157705819",
            "extra": "mean: 505.42818760199856 usec\nrounds: 1839"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1016.7682789791648,
            "unit": "iter/sec",
            "range": "stddev: 0.0000685505533225288",
            "extra": "mean: 983.5082591325526 usec\nrounds: 876"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32974.99033673685,
            "unit": "iter/sec",
            "range": "stddev: 0.000010608438328790223",
            "extra": "mean: 30.326013435883187 usec\nrounds: 11164"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24142.190948236734,
            "unit": "iter/sec",
            "range": "stddev: 0.00001133419950272137",
            "extra": "mean: 41.42126131568173 usec\nrounds: 13256"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19341.56126103605,
            "unit": "iter/sec",
            "range": "stddev: 0.0002034167000083861",
            "extra": "mean: 51.70213440910375 usec\nrounds: 10907"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15492.290399377674,
            "unit": "iter/sec",
            "range": "stddev: 0.000010738442129896304",
            "extra": "mean: 64.54823491045391 usec\nrounds: 9659"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 689.7791905726258,
            "unit": "iter/sec",
            "range": "stddev: 0.00005952468080323473",
            "extra": "mean: 1.4497392987020121 msec\nrounds: 539"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1760671010472,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25362.75788981776,
            "unit": "iter/sec",
            "range": "stddev: 0.000017238664624541644",
            "extra": "mean: 39.42788888906534 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3544.138645527269,
            "unit": "iter/sec",
            "range": "stddev: 0.0003354627048432949",
            "extra": "mean: 282.1560046083434 usec\nrounds: 3038"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2062.735737259341,
            "unit": "iter/sec",
            "range": "stddev: 0.00036673622606059043",
            "extra": "mean: 484.7930745257037 usec\nrounds: 1476"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7902.189854852294,
            "unit": "iter/sec",
            "range": "stddev: 0.000008555905198280488",
            "extra": "mean: 126.54720000000454 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6004.446722708428,
            "unit": "iter/sec",
            "range": "stddev: 0.000011842239018407854",
            "extra": "mean: 166.54323806689214 usec\nrounds: 3352"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31363.44990849014,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075902638507794515",
            "extra": "mean: 31.88424752116629 usec\nrounds: 16540"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13484.742778358726,
            "unit": "iter/sec",
            "range": "stddev: 0.00001234478914004737",
            "extra": "mean: 74.15788468763907 usec\nrounds: 7987"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3840.261580667091,
            "unit": "iter/sec",
            "range": "stddev: 0.000014926914873407367",
            "extra": "mean: 260.3989283006837 usec\nrounds: 3166"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2008.1597903463125,
            "unit": "iter/sec",
            "range": "stddev: 0.000017324648033096398",
            "extra": "mean: 497.9683413676694 usec\nrounds: 1784"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1023.4794898017541,
            "unit": "iter/sec",
            "range": "stddev: 0.00003562990274185027",
            "extra": "mean: 977.0591496598508 usec\nrounds: 882"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34340.26600708774,
            "unit": "iter/sec",
            "range": "stddev: 0.000010164761663725454",
            "extra": "mean: 29.12033354061971 usec\nrounds: 17689"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25251.809708980007,
            "unit": "iter/sec",
            "range": "stddev: 0.000009991838313777662",
            "extra": "mean: 39.60112211856173 usec\nrounds: 14576"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19318.452169790507,
            "unit": "iter/sec",
            "range": "stddev: 0.00018874734724893042",
            "extra": "mean: 51.76398146243639 usec\nrounds: 11652"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15712.938625318911,
            "unit": "iter/sec",
            "range": "stddev: 0.000010405272708216185",
            "extra": "mean: 63.641819257707674 usec\nrounds: 10562"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 662.5008621134663,
            "unit": "iter/sec",
            "range": "stddev: 0.00008480550226387934",
            "extra": "mean: 1.5094319980352424 msec\nrounds: 509"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1760757126688,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 26600.885631987265,
            "unit": "iter/sec",
            "range": "stddev: 0.00001642598356621815",
            "extra": "mean: 37.592733333566585 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3401.354649019577,
            "unit": "iter/sec",
            "range": "stddev: 0.00036563434184707413",
            "extra": "mean: 294.000509558227 usec\nrounds: 3191"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2065.983820299722,
            "unit": "iter/sec",
            "range": "stddev: 0.0004976302484609532",
            "extra": "mean: 484.0308961640005 usec\nrounds: 1512"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7837.432833181864,
            "unit": "iter/sec",
            "range": "stddev: 0.000015097435039241764",
            "extra": "mean: 127.59280000030533 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5487.830406294369,
            "unit": "iter/sec",
            "range": "stddev: 0.00003676945984965238",
            "extra": "mean: 182.22137456234643 usec\nrounds: 3428"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31461.318351383576,
            "unit": "iter/sec",
            "range": "stddev: 0.000008348676765958155",
            "extra": "mean: 31.785063449384122 usec\nrounds: 14878"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13769.152031452428,
            "unit": "iter/sec",
            "range": "stddev: 0.000010958048211369476",
            "extra": "mean: 72.62611362818366 usec\nrounds: 8387"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3888.9782053364497,
            "unit": "iter/sec",
            "range": "stddev: 0.000020354978119210557",
            "extra": "mean: 257.13695145624666 usec\nrounds: 3090"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2030.5028921363537,
            "unit": "iter/sec",
            "range": "stddev: 0.00002438847846383501",
            "extra": "mean: 492.4888331224535 usec\nrounds: 1582"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1041.7835210793266,
            "unit": "iter/sec",
            "range": "stddev: 0.00002282810520300525",
            "extra": "mean: 959.8923190529666 usec\nrounds: 887"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34125.94334058673,
            "unit": "iter/sec",
            "range": "stddev: 0.000010805281574155587",
            "extra": "mean: 29.303219255207466 usec\nrounds: 15279"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25585.440289352548,
            "unit": "iter/sec",
            "range": "stddev: 0.000010367188320379711",
            "extra": "mean: 39.08472899784933 usec\nrounds: 13332"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19199.36783837566,
            "unit": "iter/sec",
            "range": "stddev: 0.0002705758292428491",
            "extra": "mean: 52.08504823795302 usec\nrounds: 11464"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15737.111535631864,
            "unit": "iter/sec",
            "range": "stddev: 0.000012299773492650505",
            "extra": "mean: 63.54406256420097 usec\nrounds: 6809"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 666.5567912599789,
            "unit": "iter/sec",
            "range": "stddev: 0.00006330542989486045",
            "extra": "mean: 1.5002472604168056 msec\nrounds: 480"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1760844249696,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25780.973055493356,
            "unit": "iter/sec",
            "range": "stddev: 0.00001934378791713928",
            "extra": "mean: 38.78829545523775 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3487.9036921887937,
            "unit": "iter/sec",
            "range": "stddev: 0.0004774127628957066",
            "extra": "mean: 286.7051639755745 usec\nrounds: 2787"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2081.3743155488355,
            "unit": "iter/sec",
            "range": "stddev: 0.00047637103909283564",
            "extra": "mean: 480.4517825215457 usec\nrounds: 1499"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7916.0978070922465,
            "unit": "iter/sec",
            "range": "stddev: 0.000008445744496549858",
            "extra": "mean: 126.32486666651252 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6019.792611352294,
            "unit": "iter/sec",
            "range": "stddev: 0.000013579745753419194",
            "extra": "mean: 166.1186795894217 usec\nrounds: 3508"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31516.356617171445,
            "unit": "iter/sec",
            "range": "stddev: 0.000007861056847358604",
            "extra": "mean: 31.729555930178737 usec\nrounds: 14536"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13692.383701076402,
            "unit": "iter/sec",
            "range": "stddev: 0.000010729394856178509",
            "extra": "mean: 73.03330244253868 usec\nrounds: 8147"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3743.114539701878,
            "unit": "iter/sec",
            "range": "stddev: 0.00004528718273896961",
            "extra": "mean: 267.1572000785328 usec\nrounds: 2549"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2032.4469169391934,
            "unit": "iter/sec",
            "range": "stddev: 0.00001730053684385033",
            "extra": "mean: 492.01777013983286 usec\nrounds: 1862"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1004.084024433043,
            "unit": "iter/sec",
            "range": "stddev: 0.00015503028541354136",
            "extra": "mean: 995.9325869811054 usec\nrounds: 891"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33952.04403801169,
            "unit": "iter/sec",
            "range": "stddev: 0.000010553922334831217",
            "extra": "mean: 29.453307697186947 usec\nrounds: 15577"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24745.44546884805,
            "unit": "iter/sec",
            "range": "stddev: 0.00001044282927899909",
            "extra": "mean: 40.41147698306326 usec\nrounds: 10514"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19547.844568483713,
            "unit": "iter/sec",
            "range": "stddev: 0.0001757009382819862",
            "extra": "mean: 51.15653526385534 usec\nrounds: 11811"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15756.77800731381,
            "unit": "iter/sec",
            "range": "stddev: 0.00001091487645628279",
            "extra": "mean: 63.4647514571717 usec\nrounds: 9950"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 646.6614146446384,
            "unit": "iter/sec",
            "range": "stddev: 0.00014202053851019528",
            "extra": "mean: 1.5464043119837803 msec\nrounds: 484"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1760930676254,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 23610.980758915262,
            "unit": "iter/sec",
            "range": "stddev: 0.000025686807474606423",
            "extra": "mean: 42.35317499983182 usec\nrounds: 40"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3499.7623681071645,
            "unit": "iter/sec",
            "range": "stddev: 0.0005324508384805392",
            "extra": "mean: 285.7336855532985 usec\nrounds: 3018"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1978.0593707138792,
            "unit": "iter/sec",
            "range": "stddev: 0.0007050296271620115",
            "extra": "mean: 505.54599867197163 usec\nrounds: 1506"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7643.857396167671,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060716773130657255",
            "extra": "mean: 130.82400000049196 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5820.739539887501,
            "unit": "iter/sec",
            "range": "stddev: 0.000027285937024018538",
            "extra": "mean: 171.79947550433207 usec\nrounds: 3123"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30992.73231518385,
            "unit": "iter/sec",
            "range": "stddev: 0.000008302647459537384",
            "extra": "mean: 32.26562891681814 usec\nrounds: 10340"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13541.876035701793,
            "unit": "iter/sec",
            "range": "stddev: 0.00001233456713238748",
            "extra": "mean: 73.84501212118622 usec\nrounds: 5445"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3850.48441460136,
            "unit": "iter/sec",
            "range": "stddev: 0.000016981475208354853",
            "extra": "mean: 259.7075828194281 usec\nrounds: 2270"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1994.5162863278777,
            "unit": "iter/sec",
            "range": "stddev: 0.000023571881628886088",
            "extra": "mean: 501.3746976421583 usec\nrounds: 1442"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1029.0710223409537,
            "unit": "iter/sec",
            "range": "stddev: 0.00004065243367993041",
            "extra": "mean: 971.7502274285964 usec\nrounds: 875"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34109.15517233294,
            "unit": "iter/sec",
            "range": "stddev: 0.00001053772325576003",
            "extra": "mean: 29.3176419922336 usec\nrounds: 14617"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24973.33084634351,
            "unit": "iter/sec",
            "range": "stddev: 0.000010732437740852706",
            "extra": "mean: 40.04271621406144 usec\nrounds: 12372"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18472.821019777337,
            "unit": "iter/sec",
            "range": "stddev: 0.00001837877613062245",
            "extra": "mean: 54.13358354576066 usec\nrounds: 11377"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15043.861898107218,
            "unit": "iter/sec",
            "range": "stddev: 0.0002999366700590821",
            "extra": "mean: 66.47229326971005 usec\nrounds: 9851"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 648.2761953334935,
            "unit": "iter/sec",
            "range": "stddev: 0.00009101690847831043",
            "extra": "mean: 1.5425523984967067 msec\nrounds: 532"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1761016751344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25127.52217579156,
            "unit": "iter/sec",
            "range": "stddev: 0.00002260028464583321",
            "extra": "mean: 39.79699999880702 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3525.0052152548296,
            "unit": "iter/sec",
            "range": "stddev: 0.00038448107931744817",
            "extra": "mean: 283.68752354532563 usec\nrounds: 3058"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2096.479356132633,
            "unit": "iter/sec",
            "range": "stddev: 0.0005225773597363472",
            "extra": "mean: 476.9901487819542 usec\nrounds: 1519"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8026.1545622236,
            "unit": "iter/sec",
            "range": "stddev: 0.000006705578128563954",
            "extra": "mean: 124.59266666837722 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5982.402923485123,
            "unit": "iter/sec",
            "range": "stddev: 0.000012144957426328329",
            "extra": "mean: 167.1569121622182 usec\nrounds: 2516"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31336.41889295026,
            "unit": "iter/sec",
            "range": "stddev: 0.000007443204791251859",
            "extra": "mean: 31.91175109753749 usec\nrounds: 14805"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13638.12591432568,
            "unit": "iter/sec",
            "range": "stddev: 0.000010358550466158961",
            "extra": "mean: 73.32385741867847 usec\nrounds: 6733"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3862.9556248369513,
            "unit": "iter/sec",
            "range": "stddev: 0.000013129231796909863",
            "extra": "mean: 258.8691398809968 usec\nrounds: 3024"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2023.8441254983682,
            "unit": "iter/sec",
            "range": "stddev: 0.000017276198979559394",
            "extra": "mean: 494.1091991231052 usec\nrounds: 1597"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 997.513173850359,
            "unit": "iter/sec",
            "range": "stddev: 0.00011282007140734862",
            "extra": "mean: 1.0024930258715703 msec\nrounds: 889"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34097.31382788304,
            "unit": "iter/sec",
            "range": "stddev: 0.000010105777163946242",
            "extra": "mean: 29.327823448140695 usec\nrounds: 14483"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24959.491165965683,
            "unit": "iter/sec",
            "range": "stddev: 0.000010120654483125884",
            "extra": "mean: 40.06491932670416 usec\nrounds: 13189"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19361.09784991244,
            "unit": "iter/sec",
            "range": "stddev: 0.00019913619981556761",
            "extra": "mean: 51.649963641112556 usec\nrounds: 11194"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15519.279948810312,
            "unit": "iter/sec",
            "range": "stddev: 0.000010716614505409255",
            "extra": "mean: 64.43597920125532 usec\nrounds: 9664"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 695.1381143987803,
            "unit": "iter/sec",
            "range": "stddev: 0.000051719332886265066",
            "extra": "mean: 1.4385630413387596 msec\nrounds: 508"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1761103305448,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25642.91050449157,
            "unit": "iter/sec",
            "range": "stddev: 0.000018286464233739535",
            "extra": "mean: 38.99713333339605 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3566.9972357998545,
            "unit": "iter/sec",
            "range": "stddev: 0.00034424127119324306",
            "extra": "mean: 280.34784831442755 usec\nrounds: 3204"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2108.110502887431,
            "unit": "iter/sec",
            "range": "stddev: 0.0004287890480672097",
            "extra": "mean: 474.35843549487697 usec\nrounds: 1527"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8105.829712707656,
            "unit": "iter/sec",
            "range": "stddev: 0.000006543248272497373",
            "extra": "mean: 123.36800000033085 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6036.716970857914,
            "unit": "iter/sec",
            "range": "stddev: 0.00001317283016607002",
            "extra": "mean: 165.65295421790896 usec\nrounds: 3473"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31248.463566556173,
            "unit": "iter/sec",
            "range": "stddev: 0.000008386075385476914",
            "extra": "mean: 32.00157338520333 usec\nrounds: 14383"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13766.844677781117,
            "unit": "iter/sec",
            "range": "stddev: 0.000010806256779515278",
            "extra": "mean: 72.63828592574605 usec\nrounds: 5407"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3928.74335528727,
            "unit": "iter/sec",
            "range": "stddev: 0.000013473138657513425",
            "extra": "mean: 254.53431531846138 usec\nrounds: 2461"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2039.234494487967,
            "unit": "iter/sec",
            "range": "stddev: 0.000026128883876512215",
            "extra": "mean: 490.3800924822483 usec\nrounds: 1849"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1025.4575755675892,
            "unit": "iter/sec",
            "range": "stddev: 0.00010769842543584383",
            "extra": "mean: 975.1744234241007 usec\nrounds: 888"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34641.0344523806,
            "unit": "iter/sec",
            "range": "stddev: 0.00001006516602590075",
            "extra": "mean: 28.86749820865347 usec\nrounds: 16748"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25654.09784606663,
            "unit": "iter/sec",
            "range": "stddev: 0.000009986556706663206",
            "extra": "mean: 38.98012730754916 usec\nrounds: 12513"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19421.01689051536,
            "unit": "iter/sec",
            "range": "stddev: 0.0001882475470068517",
            "extra": "mean: 51.4906096646448 usec\nrounds: 12251"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15716.888396565213,
            "unit": "iter/sec",
            "range": "stddev: 0.000010797735242746006",
            "extra": "mean: 63.62582559398597 usec\nrounds: 9713"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 692.9226035170966,
            "unit": "iter/sec",
            "range": "stddev: 0.00005283470064512895",
            "extra": "mean: 1.4431626200736671 msec\nrounds: 558"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1761189486836,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 21519.722825587436,
            "unit": "iter/sec",
            "range": "stddev: 0.000023072034427259924",
            "extra": "mean: 46.4690000008261 usec\nrounds: 40"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3345.4392209145253,
            "unit": "iter/sec",
            "range": "stddev: 0.0005346419831143727",
            "extra": "mean: 298.91441271697505 usec\nrounds: 2595"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1980.348663717036,
            "unit": "iter/sec",
            "range": "stddev: 0.0007980739280380374",
            "extra": "mean: 504.961584957994 usec\nrounds: 1436"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7342.816009193443,
            "unit": "iter/sec",
            "range": "stddev: 0.000006903496224093332",
            "extra": "mean: 136.187533331622 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5795.2084187321625,
            "unit": "iter/sec",
            "range": "stddev: 0.000014082082359342263",
            "extra": "mean: 172.55634789037896 usec\nrounds: 3389"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 29580.160266968825,
            "unit": "iter/sec",
            "range": "stddev: 0.00000906140549464219",
            "extra": "mean: 33.80644293251739 usec\nrounds: 13449"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13138.357075804124,
            "unit": "iter/sec",
            "range": "stddev: 0.000011430675542202143",
            "extra": "mean: 76.1130173453438 usec\nrounds: 5650"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3702.1652223824276,
            "unit": "iter/sec",
            "range": "stddev: 0.000014715249727055408",
            "extra": "mean: 270.1122018958617 usec\nrounds: 2848"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1919.5647332541669,
            "unit": "iter/sec",
            "range": "stddev: 0.000017965699023990738",
            "extra": "mean: 520.9514337683925 usec\nrounds: 1457"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 972.7018891277604,
            "unit": "iter/sec",
            "range": "stddev: 0.0000847873530290526",
            "extra": "mean: 1.0280642108104863 msec\nrounds: 740"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 31975.040921448577,
            "unit": "iter/sec",
            "range": "stddev: 0.000011110153673037205",
            "extra": "mean: 31.274393126083808 usec\nrounds: 13268"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23904.276271112307,
            "unit": "iter/sec",
            "range": "stddev: 0.000010805371040093568",
            "extra": "mean: 41.83351918537161 usec\nrounds: 11389"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19264.418680824267,
            "unit": "iter/sec",
            "range": "stddev: 0.000010912853639397769",
            "extra": "mean: 51.90917081735752 usec\nrounds: 10520"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15100.706746335467,
            "unit": "iter/sec",
            "range": "stddev: 0.000011065109393716618",
            "extra": "mean: 66.22206607930275 usec\nrounds: 8399"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 543.3866216180058,
            "unit": "iter/sec",
            "range": "stddev: 0.0015485387126719535",
            "extra": "mean: 1.8403103061727344 msec\nrounds: 405"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1761275775299,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25260.295866190205,
            "unit": "iter/sec",
            "range": "stddev: 0.000017847199484316876",
            "extra": "mean: 39.58781818301883 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3492.5611896837704,
            "unit": "iter/sec",
            "range": "stddev: 0.00048823494460613424",
            "extra": "mean: 286.32282891815095 usec\nrounds: 3133"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2005.7081448900735,
            "unit": "iter/sec",
            "range": "stddev: 0.0005648090152187814",
            "extra": "mean: 498.57702505107335 usec\nrounds: 1477"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8024.986598065598,
            "unit": "iter/sec",
            "range": "stddev: 0.000011915479789081664",
            "extra": "mean: 124.61080000321091 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5903.5373695592825,
            "unit": "iter/sec",
            "range": "stddev: 0.000020574453846283288",
            "extra": "mean: 169.38996696393457 usec\nrounds: 3027"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31002.748419683827,
            "unit": "iter/sec",
            "range": "stddev: 0.000008042397299797188",
            "extra": "mean: 32.25520481161903 usec\nrounds: 12055"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13587.17115818209,
            "unit": "iter/sec",
            "range": "stddev: 0.000011547057431611197",
            "extra": "mean: 73.59883734134075 usec\nrounds: 7402"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3805.0809124525927,
            "unit": "iter/sec",
            "range": "stddev: 0.000016541043681829333",
            "extra": "mean: 262.8065008361262 usec\nrounds: 2989"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2008.7753311508259,
            "unit": "iter/sec",
            "range": "stddev: 0.000016450789268094176",
            "extra": "mean: 497.81575096658554 usec\nrounds: 1811"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1035.0153022785819,
            "unit": "iter/sec",
            "range": "stddev: 0.00002274455214187956",
            "extra": "mean: 966.1692902496264 usec\nrounds: 882"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34119.704452429956,
            "unit": "iter/sec",
            "range": "stddev: 0.000010323602863087499",
            "extra": "mean: 29.308577434901597 usec\nrounds: 15697"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24924.908226510834,
            "unit": "iter/sec",
            "range": "stddev: 0.00001096702050466735",
            "extra": "mean: 40.120508806382354 usec\nrounds: 13172"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18372.820513333027,
            "unit": "iter/sec",
            "range": "stddev: 0.00023214483378710348",
            "extra": "mean: 54.428224521885845 usec\nrounds: 11500"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15591.688662139923,
            "unit": "iter/sec",
            "range": "stddev: 0.000011354468550863691",
            "extra": "mean: 64.1367347481881 usec\nrounds: 7540"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 660.728338950374,
            "unit": "iter/sec",
            "range": "stddev: 0.00010214721356090993",
            "extra": "mean: 1.5134813221248982 msec\nrounds: 565"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1761362244757,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25525.585996619713,
            "unit": "iter/sec",
            "range": "stddev: 0.00001736626334384019",
            "extra": "mean: 39.1763777776709 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3420.1739623361004,
            "unit": "iter/sec",
            "range": "stddev: 0.00028780309753070877",
            "extra": "mean: 292.3827884231258 usec\nrounds: 3006"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2093.6938604908883,
            "unit": "iter/sec",
            "range": "stddev: 0.00040004365038489334",
            "extra": "mean: 477.62474680302097 usec\nrounds: 1564"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8148.4097020683,
            "unit": "iter/sec",
            "range": "stddev: 0.000010940480232402917",
            "extra": "mean: 122.72333333290439 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6020.71641011967,
            "unit": "iter/sec",
            "range": "stddev: 0.000012386447148067885",
            "extra": "mean: 166.09319088990665 usec\nrounds: 3798"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31430.92143241613,
            "unit": "iter/sec",
            "range": "stddev: 0.000007648599063207493",
            "extra": "mean: 31.81580285993954 usec\nrounds: 15385"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13679.935506269634,
            "unit": "iter/sec",
            "range": "stddev: 0.000010434288632216906",
            "extra": "mean: 73.0997598301316 usec\nrounds: 8952"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3906.377287953747,
            "unit": "iter/sec",
            "range": "stddev: 0.000013511412344970584",
            "extra": "mean: 255.99165832848254 usec\nrounds: 3398"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2022.5988811128525,
            "unit": "iter/sec",
            "range": "stddev: 0.000015468081883799967",
            "extra": "mean: 494.4134051185626 usec\nrounds: 1602"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1023.2850015981511,
            "unit": "iter/sec",
            "range": "stddev: 0.00008754225850873902",
            "extra": "mean: 977.2448520580436 usec\nrounds: 899"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34713.35339101285,
            "unit": "iter/sec",
            "range": "stddev: 0.000010095178344661658",
            "extra": "mean: 28.807358042766793 usec\nrounds: 16431"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25377.892455047742,
            "unit": "iter/sec",
            "range": "stddev: 0.000010143542694445918",
            "extra": "mean: 39.40437535430949 usec\nrounds: 14112"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19649.901421909824,
            "unit": "iter/sec",
            "range": "stddev: 0.0001520640114667013",
            "extra": "mean: 50.890840545642156 usec\nrounds: 12756"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15677.501226649034,
            "unit": "iter/sec",
            "range": "stddev: 0.00001066800270785969",
            "extra": "mean: 63.78567512405443 usec\nrounds: 8868"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 699.819900678255,
            "unit": "iter/sec",
            "range": "stddev: 0.00005276853307007734",
            "extra": "mean: 1.4289390727968938 msec\nrounds: 522"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1761448841984,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25139.696722744524,
            "unit": "iter/sec",
            "range": "stddev: 0.00001888116973971529",
            "extra": "mean: 39.77772727446129 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3500.3023982832624,
            "unit": "iter/sec",
            "range": "stddev: 0.0003526283585753998",
            "extra": "mean: 285.6896022727791 usec\nrounds: 3168"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2027.135002037294,
            "unit": "iter/sec",
            "range": "stddev: 0.000487044472173458",
            "extra": "mean: 493.3070560150106 usec\nrounds: 1571"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8098.429390483149,
            "unit": "iter/sec",
            "range": "stddev: 0.000008934964121805498",
            "extra": "mean: 123.48073333517578 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5971.3769504007105,
            "unit": "iter/sec",
            "range": "stddev: 0.00001742957547547014",
            "extra": "mean: 167.46556251701625 usec\nrounds: 3735"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31510.566014315205,
            "unit": "iter/sec",
            "range": "stddev: 0.000007887111302646313",
            "extra": "mean: 31.73538677615951 usec\nrounds: 15200"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13745.070732659531,
            "unit": "iter/sec",
            "range": "stddev: 0.000010716147025164969",
            "extra": "mean: 72.75335423512297 usec\nrounds: 6730"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3919.1211361720784,
            "unit": "iter/sec",
            "range": "stddev: 0.000013215698431133232",
            "extra": "mean: 255.15924750841705 usec\nrounds: 3010"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2038.7176087183875,
            "unit": "iter/sec",
            "range": "stddev: 0.000024262265712465542",
            "extra": "mean: 490.504420878886 usec\nrounds: 1820"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1036.4278934754207,
            "unit": "iter/sec",
            "range": "stddev: 0.000020727591339365068",
            "extra": "mean: 964.852457460144 usec\nrounds: 905"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 35087.35227916816,
            "unit": "iter/sec",
            "range": "stddev: 0.00001010153279579546",
            "extra": "mean: 28.500298114363954 usec\nrounds: 15806"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25423.284679971082,
            "unit": "iter/sec",
            "range": "stddev: 0.000009863917170366083",
            "extra": "mean: 39.33402046934627 usec\nrounds: 13630"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19804.282173436673,
            "unit": "iter/sec",
            "range": "stddev: 0.00019610970739087003",
            "extra": "mean: 50.49413006957112 usec\nrounds: 11540"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15933.483229800213,
            "unit": "iter/sec",
            "range": "stddev: 0.000010592516111164454",
            "extra": "mean: 62.76091583852244 usec\nrounds: 9957"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 692.7242900688536,
            "unit": "iter/sec",
            "range": "stddev: 0.00005343301171230669",
            "extra": "mean: 1.4435757693737066 msec\nrounds: 542"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1761535669080,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25445.98326641024,
            "unit": "iter/sec",
            "range": "stddev: 0.000018910245273361754",
            "extra": "mean: 39.2989333338139 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3596.083216702026,
            "unit": "iter/sec",
            "range": "stddev: 0.00034031687903589297",
            "extra": "mean: 278.0803278843757 usec\nrounds: 3181"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2098.8509332284234,
            "unit": "iter/sec",
            "range": "stddev: 0.00045925112653361923",
            "extra": "mean: 476.45117819864123 usec\nrounds: 1532"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8146.148419548616,
            "unit": "iter/sec",
            "range": "stddev: 0.00000954566462907969",
            "extra": "mean: 122.7574000002581 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5813.8302516991735,
            "unit": "iter/sec",
            "range": "stddev: 0.000032556223217089335",
            "extra": "mean: 172.00364591101297 usec\nrounds: 3742"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31361.3933101507,
            "unit": "iter/sec",
            "range": "stddev: 0.000007645910429995247",
            "extra": "mean: 31.88633840692057 usec\nrounds: 14914"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13600.960052664468,
            "unit": "iter/sec",
            "range": "stddev: 0.000010774046142837749",
            "extra": "mean: 73.5242215349421 usec\nrounds: 6306"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3875.2478361303056,
            "unit": "iter/sec",
            "range": "stddev: 0.000017083020495558923",
            "extra": "mean: 258.04801196884665 usec\nrounds: 3342"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2031.140100306177,
            "unit": "iter/sec",
            "range": "stddev: 0.00002355312287354266",
            "extra": "mean: 492.3343297930353 usec\nrounds: 1789"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1045.8459711878486,
            "unit": "iter/sec",
            "range": "stddev: 0.000019461953378572196",
            "extra": "mean: 956.163744517964 usec\nrounds: 912"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34223.28231125528,
            "unit": "iter/sec",
            "range": "stddev: 0.000010069908305272152",
            "extra": "mean: 29.219874087621406 usec\nrounds: 15892"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23048.352914415816,
            "unit": "iter/sec",
            "range": "stddev: 0.000013735770517960177",
            "extra": "mean: 43.38704825083359 usec\nrounds: 14093"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18671.811615573075,
            "unit": "iter/sec",
            "range": "stddev: 0.00026166651473169176",
            "extra": "mean: 53.55666716163513 usec\nrounds: 7406"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15600.175390165185,
            "unit": "iter/sec",
            "range": "stddev: 0.000010521134212783988",
            "extra": "mean: 64.10184340814719 usec\nrounds: 5211"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 699.1363679238098,
            "unit": "iter/sec",
            "range": "stddev: 0.00005267258582835387",
            "extra": "mean: 1.4303361202187919 msec\nrounds: 549"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1761621609425,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 26261.224492843812,
            "unit": "iter/sec",
            "range": "stddev: 0.000018614615766981047",
            "extra": "mean: 38.07895554422834 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3562.1079837552584,
            "unit": "iter/sec",
            "range": "stddev: 0.0003842308338942811",
            "extra": "mean: 280.73264610742547 usec\nrounds: 2967"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2070.257793037396,
            "unit": "iter/sec",
            "range": "stddev: 0.0004940059818630117",
            "extra": "mean: 483.0316317915372 usec\nrounds: 1510"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8015.9720911576605,
            "unit": "iter/sec",
            "range": "stddev: 0.000007971479365664246",
            "extra": "mean: 124.75093334008609 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6025.497656631468,
            "unit": "iter/sec",
            "range": "stddev: 0.000013238312015263545",
            "extra": "mean: 165.96139555368217 usec\nrounds: 3734"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31614.123872885317,
            "unit": "iter/sec",
            "range": "stddev: 0.000008244669876492766",
            "extra": "mean: 31.631431698718565 usec\nrounds: 14209"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13884.943300872219,
            "unit": "iter/sec",
            "range": "stddev: 0.000010754559918975674",
            "extra": "mean: 72.02045974052933 usec\nrounds: 9166"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3906.587589420091,
            "unit": "iter/sec",
            "range": "stddev: 0.000013501845379311308",
            "extra": "mean: 255.97787765164222 usec\nrounds: 3065"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2032.6495260945112,
            "unit": "iter/sec",
            "range": "stddev: 0.000022069018687321267",
            "extra": "mean: 491.9687271033774 usec\nrounds: 1594"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1040.3552224498148,
            "unit": "iter/sec",
            "range": "stddev: 0.000028141063897734997",
            "extra": "mean: 961.2101505533976 usec\nrounds: 910"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 35113.716659235455,
            "unit": "iter/sec",
            "range": "stddev: 0.000010354735740528852",
            "extra": "mean: 28.478899277584286 usec\nrounds: 13661"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25409.90917772739,
            "unit": "iter/sec",
            "range": "stddev: 0.000010420018006185222",
            "extra": "mean: 39.35472547365626 usec\nrounds: 13689"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19216.50934866502,
            "unit": "iter/sec",
            "range": "stddev: 0.00028275588813420354",
            "extra": "mean: 52.03858733425332 usec\nrounds: 10391"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15827.507416139253,
            "unit": "iter/sec",
            "range": "stddev: 0.00001061460686959894",
            "extra": "mean: 63.18114240656135 usec\nrounds: 9206"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 655.2549791085365,
            "unit": "iter/sec",
            "range": "stddev: 0.00011227476771908771",
            "extra": "mean: 1.5261234662581018 msec\nrounds: 489"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1761708257991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24877.767237034775,
            "unit": "iter/sec",
            "range": "stddev: 0.000018072969979946393",
            "extra": "mean: 40.19653333323782 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3436.65744803878,
            "unit": "iter/sec",
            "range": "stddev: 0.000412075866417308",
            "extra": "mean: 290.98041196124353 usec\nrounds: 2993"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2059.08663049076,
            "unit": "iter/sec",
            "range": "stddev: 0.0005102782235477401",
            "extra": "mean: 485.6522232683632 usec\nrounds: 1487"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8095.763163275292,
            "unit": "iter/sec",
            "range": "stddev: 0.000010606143496335292",
            "extra": "mean: 123.5214000004703 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5907.749953877041,
            "unit": "iter/sec",
            "range": "stddev: 0.000012492794137211186",
            "extra": "mean: 169.2691816355119 usec\nrounds: 3485"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31455.53654668001,
            "unit": "iter/sec",
            "range": "stddev: 0.00000768132350976991",
            "extra": "mean: 31.79090582403515 usec\nrounds: 14526"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13717.31081340706,
            "unit": "iter/sec",
            "range": "stddev: 0.00001069851742229808",
            "extra": "mean: 72.90058624483578 usec\nrounds: 7270"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3817.0512279383784,
            "unit": "iter/sec",
            "range": "stddev: 0.000013701918080938512",
            "extra": "mean: 261.982336700288 usec\nrounds: 3267"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2005.930034117492,
            "unit": "iter/sec",
            "range": "stddev: 0.000017266341185195287",
            "extra": "mean: 498.52187413901976 usec\nrounds: 1597"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1032.0722851065718,
            "unit": "iter/sec",
            "range": "stddev: 0.000030778814251894116",
            "extra": "mean: 968.9243810056772 usec\nrounds: 895"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34319.48207152946,
            "unit": "iter/sec",
            "range": "stddev: 0.000010186918058842667",
            "extra": "mean: 29.1379688631599 usec\nrounds: 16572"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25071.561541068793,
            "unit": "iter/sec",
            "range": "stddev: 0.000010035046574980343",
            "extra": "mean: 39.88582834626942 usec\nrounds: 13702"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19365.385281047144,
            "unit": "iter/sec",
            "range": "stddev: 0.00019071274080854832",
            "extra": "mean: 51.63852851296988 usec\nrounds: 11977"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 14818.989694138032,
            "unit": "iter/sec",
            "range": "stddev: 0.00001550524354453348",
            "extra": "mean: 67.48098356499779 usec\nrounds: 8275"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 668.7106310369487,
            "unit": "iter/sec",
            "range": "stddev: 0.00007040905808789049",
            "extra": "mean: 1.4954151371114457 msec\nrounds: 547"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1761794509746,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25443.853895965014,
            "unit": "iter/sec",
            "range": "stddev: 0.00001975667251438495",
            "extra": "mean: 39.30222222186962 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3496.6993242509852,
            "unit": "iter/sec",
            "range": "stddev: 0.00037537118854055485",
            "extra": "mean: 285.983982970628 usec\nrounds: 3171"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2065.319600578084,
            "unit": "iter/sec",
            "range": "stddev: 0.0004804045461346105",
            "extra": "mean: 484.18656353239436 usec\nrounds: 1574"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8109.901053819843,
            "unit": "iter/sec",
            "range": "stddev: 0.000010107915183694653",
            "extra": "mean: 123.30606666637321 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6019.177455538731,
            "unit": "iter/sec",
            "range": "stddev: 0.000014584303692512222",
            "extra": "mean: 166.13565680470498 usec\nrounds: 3042"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 32021.46411614618,
            "unit": "iter/sec",
            "range": "stddev: 0.00000775813370406778",
            "extra": "mean: 31.22905299935271 usec\nrounds: 14453"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13727.82792253809,
            "unit": "iter/sec",
            "range": "stddev: 0.0000106564069889353",
            "extra": "mean: 72.84473593657295 usec\nrounds: 8195"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3837.9769460878674,
            "unit": "iter/sec",
            "range": "stddev: 0.000016128840938111344",
            "extra": "mean: 260.5539361093144 usec\nrounds: 3146"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1988.206509599248,
            "unit": "iter/sec",
            "range": "stddev: 0.00005224897073073191",
            "extra": "mean: 502.9658615299296 usec\nrounds: 1791"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1031.2423412860817,
            "unit": "iter/sec",
            "range": "stddev: 0.00006763533134112594",
            "extra": "mean: 969.704171332687 usec\nrounds: 893"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 36073.40312072101,
            "unit": "iter/sec",
            "range": "stddev: 0.000009965481442907439",
            "extra": "mean: 27.72125481628285 usec\nrounds: 15105"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25538.94632382728,
            "unit": "iter/sec",
            "range": "stddev: 0.000010227671775369944",
            "extra": "mean: 39.15588322714088 usec\nrounds: 13188"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19750.107926173823,
            "unit": "iter/sec",
            "range": "stddev: 0.00021472568422641294",
            "extra": "mean: 50.63263470447928 usec\nrounds: 10575"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 16036.578333471052,
            "unit": "iter/sec",
            "range": "stddev: 0.000010839006648786333",
            "extra": "mean: 62.3574417937292 usec\nrounds: 10102"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 690.3465763663854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000901630383447505",
            "extra": "mean: 1.4485477790930235 msec\nrounds: 507"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1761880915869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 26419.660454402387,
            "unit": "iter/sec",
            "range": "stddev: 0.000017954417214607912",
            "extra": "mean: 37.850600000174 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3542.9304923086306,
            "unit": "iter/sec",
            "range": "stddev: 0.00030182728456825796",
            "extra": "mean: 282.25222091455254 usec\nrounds: 2974"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2096.442162945791,
            "unit": "iter/sec",
            "range": "stddev: 0.0004008949182580874",
            "extra": "mean: 476.9986111111512 usec\nrounds: 1620"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8261.72255813484,
            "unit": "iter/sec",
            "range": "stddev: 0.00000876353976767939",
            "extra": "mean: 121.04013333337585 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6063.932116156835,
            "unit": "iter/sec",
            "range": "stddev: 0.000013729198706810837",
            "extra": "mean: 164.90949780515922 usec\nrounds: 3417"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31317.24049832756,
            "unit": "iter/sec",
            "range": "stddev: 0.00000913928846232718",
            "extra": "mean: 31.931293565070117 usec\nrounds: 13520"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13717.612812307254,
            "unit": "iter/sec",
            "range": "stddev: 0.000012841952293293702",
            "extra": "mean: 72.89898130838141 usec\nrounds: 8881"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3862.699748900256,
            "unit": "iter/sec",
            "range": "stddev: 0.000021004103709070504",
            "extra": "mean: 258.88628809026864 usec\nrounds: 3367"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2048.113630106009,
            "unit": "iter/sec",
            "range": "stddev: 0.000017902291935543064",
            "extra": "mean: 488.2541599746302 usec\nrounds: 1569"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1048.7970988690845,
            "unit": "iter/sec",
            "range": "stddev: 0.00005580315428443898",
            "extra": "mean: 953.473270548038 usec\nrounds: 876"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34420.508194968745,
            "unit": "iter/sec",
            "range": "stddev: 0.000010683977557135916",
            "extra": "mean: 29.05244728914753 usec\nrounds: 16600"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25554.31426925654,
            "unit": "iter/sec",
            "range": "stddev: 0.000010112087845113048",
            "extra": "mean: 39.13233552124947 usec\nrounds: 14321"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19525.43312835279,
            "unit": "iter/sec",
            "range": "stddev: 0.00015602234458905544",
            "extra": "mean: 51.21525312275428 usec\nrounds: 12409"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15932.178520977348,
            "unit": "iter/sec",
            "range": "stddev: 0.000010641330821460536",
            "extra": "mean: 62.76605541943524 usec\nrounds: 10610"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 692.4499038499426,
            "unit": "iter/sec",
            "range": "stddev: 0.0000517979583986843",
            "extra": "mean: 1.4441477924108501 msec\nrounds: 448"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1761967296547,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25781.024941142074,
            "unit": "iter/sec",
            "range": "stddev: 0.000018001862253683336",
            "extra": "mean: 38.788217391783064 usec\nrounds: 46"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3587.17720450871,
            "unit": "iter/sec",
            "range": "stddev: 0.00032503943145014406",
            "extra": "mean: 278.77072778649006 usec\nrounds: 3185"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2100.2756828036095,
            "unit": "iter/sec",
            "range": "stddev: 0.00046983034929792784",
            "extra": "mean: 476.12797128857056 usec\nrounds: 1428"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7986.416702490718,
            "unit": "iter/sec",
            "range": "stddev: 0.000011022257006814345",
            "extra": "mean: 125.21259999971336 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5949.5775202965115,
            "unit": "iter/sec",
            "range": "stddev: 0.000024144144403805924",
            "extra": "mean: 168.07916135029413 usec\nrounds: 3229"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 32404.722772167228,
            "unit": "iter/sec",
            "range": "stddev: 0.000008218507064784566",
            "extra": "mean: 30.859699279973814 usec\nrounds: 14166"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13938.61188071884,
            "unit": "iter/sec",
            "range": "stddev: 0.000010734272845545918",
            "extra": "mean: 71.74315552779623 usec\nrounds: 8005"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3886.116296575995,
            "unit": "iter/sec",
            "range": "stddev: 0.00001618325836775898",
            "extra": "mean: 257.3263185358314 usec\nrounds: 2568"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2039.4692061962285,
            "unit": "iter/sec",
            "range": "stddev: 0.000014367209300652337",
            "extra": "mean: 490.3236572348544 usec\nrounds: 1555"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1047.2778418596006,
            "unit": "iter/sec",
            "range": "stddev: 0.00002781206273741987",
            "extra": "mean: 954.8564478594797 usec\nrounds: 911"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 35308.44708025821,
            "unit": "iter/sec",
            "range": "stddev: 0.000010588488500073455",
            "extra": "mean: 28.321834651264624 usec\nrounds: 15555"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25728.366387605107,
            "unit": "iter/sec",
            "range": "stddev: 0.000010113933229067067",
            "extra": "mean: 38.867605697723576 usec\nrounds: 12777"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19648.090976904456,
            "unit": "iter/sec",
            "range": "stddev: 0.00020690465542599424",
            "extra": "mean: 50.895529808746296 usec\nrounds: 10668"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15485.014785317982,
            "unit": "iter/sec",
            "range": "stddev: 0.000013945313744956738",
            "extra": "mean: 64.57856281468608 usec\nrounds: 8143"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 688.4688016182262,
            "unit": "iter/sec",
            "range": "stddev: 0.000052585452028071426",
            "extra": "mean: 1.452498642857205 msec\nrounds: 574"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1762053816891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25391.168258684032,
            "unit": "iter/sec",
            "range": "stddev: 0.000020625416189049498",
            "extra": "mean: 39.38377272806225 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3583.673167153684,
            "unit": "iter/sec",
            "range": "stddev: 0.00040218737165900395",
            "extra": "mean: 279.0433037157362 usec\nrounds: 3095"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2125.44144962646,
            "unit": "iter/sec",
            "range": "stddev: 0.00048838478600059",
            "extra": "mean: 470.4904951278461 usec\nrounds: 1642"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8233.185776384547,
            "unit": "iter/sec",
            "range": "stddev: 0.00000926003628804096",
            "extra": "mean: 121.45966666613124 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6135.817744167016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000125610231013768",
            "extra": "mean: 162.97746147213138 usec\nrounds: 3478"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 32676.071967888296,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075545301490765974",
            "extra": "mean: 30.603433637394613 usec\nrounds: 14692"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 14067.6031655248,
            "unit": "iter/sec",
            "range": "stddev: 0.000010714639735402639",
            "extra": "mean: 71.08531483534313 usec\nrounds: 7226"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3874.0181753267025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000130463292851183",
            "extra": "mean: 258.1299195674704 usec\nrounds: 2959"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2047.4256547206587,
            "unit": "iter/sec",
            "range": "stddev: 0.000016925590918537794",
            "extra": "mean: 488.41822299840015 usec\nrounds: 1861"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1041.6395252046148,
            "unit": "iter/sec",
            "range": "stddev: 0.00010121966336307895",
            "extra": "mean: 960.0250142231927 usec\nrounds: 914"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 35879.27947657457,
            "unit": "iter/sec",
            "range": "stddev: 0.000010421256739134727",
            "extra": "mean: 27.871239740276714 usec\nrounds: 16326"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25913.303523338895,
            "unit": "iter/sec",
            "range": "stddev: 0.000010280486457211914",
            "extra": "mean: 38.59021676257321 usec\nrounds: 13900"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19938.470776194743,
            "unit": "iter/sec",
            "range": "stddev: 0.00018511173149063058",
            "extra": "mean: 50.15429775055447 usec\nrounds: 12403"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 16103.920961954871,
            "unit": "iter/sec",
            "range": "stddev: 0.000011248510747670895",
            "extra": "mean: 62.096678340788934 usec\nrounds: 8052"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 683.2950891036272,
            "unit": "iter/sec",
            "range": "stddev: 0.00005311883125324179",
            "extra": "mean: 1.4634965418993988 msec\nrounds: 537"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1762140346339,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 26109.23640347889,
            "unit": "iter/sec",
            "range": "stddev: 0.000018236683418773968",
            "extra": "mean: 38.30062222220931 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3541.793058111584,
            "unit": "iter/sec",
            "range": "stddev: 0.00044143879698286994",
            "extra": "mean: 282.3428652077095 usec\nrounds: 3153"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2096.8433128503593,
            "unit": "iter/sec",
            "range": "stddev: 0.0005183399614133138",
            "extra": "mean: 476.907355867541 usec\nrounds: 1568"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7656.4441227472325,
            "unit": "iter/sec",
            "range": "stddev: 0.000024056744546637036",
            "extra": "mean: 130.6089333335573 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6024.71508767987,
            "unit": "iter/sec",
            "range": "stddev: 0.000015809551897610617",
            "extra": "mean: 165.98295279471913 usec\nrounds: 3453"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31944.98900365851,
            "unit": "iter/sec",
            "range": "stddev: 0.000007655499654996784",
            "extra": "mean: 31.303814187742393 usec\nrounds: 13998"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13713.018241104633,
            "unit": "iter/sec",
            "range": "stddev: 0.000011233130441028754",
            "extra": "mean: 72.92340624199785 usec\nrounds: 7786"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3865.6805577750965,
            "unit": "iter/sec",
            "range": "stddev: 0.0000162960463917185",
            "extra": "mean: 258.68666203902603 usec\nrounds: 2305"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2027.4564981528677,
            "unit": "iter/sec",
            "range": "stddev: 0.000015760896902346664",
            "extra": "mean: 493.22883174611087 usec\nrounds: 1575"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1039.745936131634,
            "unit": "iter/sec",
            "range": "stddev: 0.000033451754516527005",
            "extra": "mean: 961.7734152638207 usec\nrounds: 891"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 35174.65476345166,
            "unit": "iter/sec",
            "range": "stddev: 0.000010236078485506483",
            "extra": "mean: 28.429561191857186 usec\nrounds: 15337"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25150.401506352388,
            "unit": "iter/sec",
            "range": "stddev: 0.000010258490699694327",
            "extra": "mean: 39.76079665159318 usec\nrounds: 13081"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 20529.087518764456,
            "unit": "iter/sec",
            "range": "stddev: 0.000010699785657036157",
            "extra": "mean: 48.71137107706115 usec\nrounds: 9591"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 14732.761384320956,
            "unit": "iter/sec",
            "range": "stddev: 0.00025069658458957284",
            "extra": "mean: 67.87593811600246 usec\nrounds: 8015"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 648.6891876411869,
            "unit": "iter/sec",
            "range": "stddev: 0.00008695517665945209",
            "extra": "mean: 1.5415703222004922 msec\nrounds: 509"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1762226476450,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25027.355481268183,
            "unit": "iter/sec",
            "range": "stddev: 0.000020840230625209794",
            "extra": "mean: 39.95627907025389 usec\nrounds: 43"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3502.7513242922896,
            "unit": "iter/sec",
            "range": "stddev: 0.0004298886155435945",
            "extra": "mean: 285.4898642289555 usec\nrounds: 3145"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2058.021288936418,
            "unit": "iter/sec",
            "range": "stddev: 0.0006921274852489881",
            "extra": "mean: 485.9036227544557 usec\nrounds: 1503"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8148.334453251714,
            "unit": "iter/sec",
            "range": "stddev: 0.000007699519871345802",
            "extra": "mean: 122.72446666704204 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6004.225254020303,
            "unit": "iter/sec",
            "range": "stddev: 0.000013760551077013148",
            "extra": "mean: 166.54938109299297 usec\nrounds: 3385"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31960.213860465745,
            "unit": "iter/sec",
            "range": "stddev: 0.000008093471205812298",
            "extra": "mean: 31.288902019425578 usec\nrounds: 12033"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13891.55816834454,
            "unit": "iter/sec",
            "range": "stddev: 0.00001129998888887398",
            "extra": "mean: 71.9861651142026 usec\nrounds: 6656"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3788.1162185168964,
            "unit": "iter/sec",
            "range": "stddev: 0.000024910364755991413",
            "extra": "mean: 263.9834530714358 usec\nrounds: 3207"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2023.9297409349404,
            "unit": "iter/sec",
            "range": "stddev: 0.000023524880591720325",
            "extra": "mean: 494.0882975206723 usec\nrounds: 1573"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1040.3398518977053,
            "unit": "iter/sec",
            "range": "stddev: 0.000024551941582000597",
            "extra": "mean: 961.224351999858 usec\nrounds: 875"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 35409.3183321493,
            "unit": "iter/sec",
            "range": "stddev: 0.000010185213330629242",
            "extra": "mean: 28.241153659602272 usec\nrounds: 13608"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25693.251625208388,
            "unit": "iter/sec",
            "range": "stddev: 0.000010345354989784394",
            "extra": "mean: 38.920725744921725 usec\nrounds: 9699"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19485.726658309944,
            "unit": "iter/sec",
            "range": "stddev: 0.0002685574111148635",
            "extra": "mean: 51.319615508079444 usec\nrounds: 11839"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15907.146028060753,
            "unit": "iter/sec",
            "range": "stddev: 0.000010925308634943057",
            "extra": "mean: 62.86482806129809 usec\nrounds: 9073"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 637.7090585469086,
            "unit": "iter/sec",
            "range": "stddev: 0.00014430762666001821",
            "extra": "mean: 1.5681132118126277 msec\nrounds: 491"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1762312924621,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 23643.215283543173,
            "unit": "iter/sec",
            "range": "stddev: 0.00001741621139673626",
            "extra": "mean: 42.29543181870228 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3271.832619628616,
            "unit": "iter/sec",
            "range": "stddev: 0.00035705490149762014",
            "extra": "mean: 305.63910696431327 usec\nrounds: 3001"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1850.9786903449208,
            "unit": "iter/sec",
            "range": "stddev: 0.0005297784311415328",
            "extra": "mean: 540.2547340043418 usec\nrounds: 1391"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7575.948887601751,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072637026218834855",
            "extra": "mean: 131.9966666666043 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5654.242549775251,
            "unit": "iter/sec",
            "range": "stddev: 0.000013032620586343171",
            "extra": "mean: 176.85834861112363 usec\nrounds: 3600"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 28406.738364297315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075672906188121555",
            "extra": "mean: 35.20291513850245 usec\nrounds: 12161"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 12599.367028190265,
            "unit": "iter/sec",
            "range": "stddev: 0.000011175093085030439",
            "extra": "mean: 79.36906653822886 usec\nrounds: 7785"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3615.4813430366557,
            "unit": "iter/sec",
            "range": "stddev: 0.000019922975285667175",
            "extra": "mean: 276.5883447098904 usec\nrounds: 2344"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1893.830344579476,
            "unit": "iter/sec",
            "range": "stddev: 0.00006088369253349014",
            "extra": "mean: 528.0304029672992 usec\nrounds: 1685"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 974.9067806111435,
            "unit": "iter/sec",
            "range": "stddev: 0.000023925636438172632",
            "extra": "mean: 1.0257390961760735 msec\nrounds: 863"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 30441.949303384605,
            "unit": "iter/sec",
            "range": "stddev: 0.000010253158880254459",
            "extra": "mean: 32.849407573542535 usec\nrounds: 15158"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 22163.68815207754,
            "unit": "iter/sec",
            "range": "stddev: 0.000012395912963723244",
            "extra": "mean: 45.11884453248201 usec\nrounds: 9346"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18264.222959400962,
            "unit": "iter/sec",
            "range": "stddev: 0.000010796155302219596",
            "extra": "mean: 54.75185022778535 usec\nrounds: 10536"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 13822.817499079003,
            "unit": "iter/sec",
            "range": "stddev: 0.00022694634193236172",
            "extra": "mean: 72.34415126052475 usec\nrounds: 9401"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 665.9947097185556,
            "unit": "iter/sec",
            "range": "stddev: 0.000049710976229027816",
            "extra": "mean: 1.5015134285715164 msec\nrounds: 462"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1762399439520,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25070.517795336793,
            "unit": "iter/sec",
            "range": "stddev: 0.000021584380359933947",
            "extra": "mean: 39.887488888881414 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3522.506743071207,
            "unit": "iter/sec",
            "range": "stddev: 0.0003917601987570801",
            "extra": "mean: 283.8887397354189 usec\nrounds: 2947"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2078.902384271166,
            "unit": "iter/sec",
            "range": "stddev: 0.0005150558897807401",
            "extra": "mean: 481.02306657875425 usec\nrounds: 1517"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8170.820257757558,
            "unit": "iter/sec",
            "range": "stddev: 0.000012039551508759469",
            "extra": "mean: 122.38673333323882 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6037.2020265118645,
            "unit": "iter/sec",
            "range": "stddev: 0.000012619880143224001",
            "extra": "mean: 165.63964492302628 usec\nrounds: 3250"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31936.295477613592,
            "unit": "iter/sec",
            "range": "stddev: 0.000007837567809656677",
            "extra": "mean: 31.31233554314309 usec\nrounds: 14481"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13727.544320762741,
            "unit": "iter/sec",
            "range": "stddev: 0.000011394414798536125",
            "extra": "mean: 72.84624085951864 usec\nrounds: 7166"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3683.5089750015936,
            "unit": "iter/sec",
            "range": "stddev: 0.00004848702890963099",
            "extra": "mean: 271.4802669917663 usec\nrounds: 3281"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2028.822722325774,
            "unit": "iter/sec",
            "range": "stddev: 0.000027094945110196334",
            "extra": "mean: 492.8966878158943 usec\nrounds: 1781"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1047.9965254288616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000314781957155968",
            "extra": "mean: 954.2016368716295 usec\nrounds: 895"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 35184.517769838654,
            "unit": "iter/sec",
            "range": "stddev: 0.000010148681675766053",
            "extra": "mean: 28.421591750711258 usec\nrounds: 15662"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25424.991750190857,
            "unit": "iter/sec",
            "range": "stddev: 0.000010194766221882664",
            "extra": "mean: 39.33137952709437 usec\nrounds: 13364"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19552.090756668164,
            "unit": "iter/sec",
            "range": "stddev: 0.00022533321306830232",
            "extra": "mean: 51.14542544044574 usec\nrounds: 9308"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15488.574270324028,
            "unit": "iter/sec",
            "range": "stddev: 0.000013903749408625461",
            "extra": "mean: 64.56372178270735 usec\nrounds: 7584"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 680.4096644920179,
            "unit": "iter/sec",
            "range": "stddev: 0.0000717229143078152",
            "extra": "mean: 1.4697028160918066 msec\nrounds: 522"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1762485726752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 29195.06044991191,
            "unit": "iter/sec",
            "range": "stddev: 0.000017857653284795426",
            "extra": "mean: 34.25236956490074 usec\nrounds: 46"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3806.672866416739,
            "unit": "iter/sec",
            "range": "stddev: 0.0003120494531600629",
            "extra": "mean: 262.69659492471976 usec\nrounds: 3192"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2249.0016965225864,
            "unit": "iter/sec",
            "range": "stddev: 0.0004312495882615285",
            "extra": "mean: 444.64172772577416 usec\nrounds: 1605"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8186.99087151861,
            "unit": "iter/sec",
            "range": "stddev: 0.000012824303873469672",
            "extra": "mean: 122.14499999979958 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6425.965395695181,
            "unit": "iter/sec",
            "range": "stddev: 0.000010627517230654535",
            "extra": "mean: 155.61864069014598 usec\nrounds: 3593"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 33499.64226565301,
            "unit": "iter/sec",
            "range": "stddev: 0.000006872373139775575",
            "extra": "mean: 29.851065037350985 usec\nrounds: 14730"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 14803.519807448361,
            "unit": "iter/sec",
            "range": "stddev: 0.000009207762772866034",
            "extra": "mean: 67.55150214321677 usec\nrounds: 7932"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 4176.705405264766,
            "unit": "iter/sec",
            "range": "stddev: 0.00001099402315869669",
            "extra": "mean: 239.42315843954256 usec\nrounds: 2512"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2187.724651622739,
            "unit": "iter/sec",
            "range": "stddev: 0.000016437568087347937",
            "extra": "mean: 457.09591435935624 usec\nrounds: 1553"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1125.1582136403165,
            "unit": "iter/sec",
            "range": "stddev: 0.000019317293204055868",
            "extra": "mean: 888.7638981584804 usec\nrounds: 923"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 37390.660823509395,
            "unit": "iter/sec",
            "range": "stddev: 0.000009627839965362164",
            "extra": "mean: 26.74464633615808 usec\nrounds: 13756"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 26971.71904419273,
            "unit": "iter/sec",
            "range": "stddev: 0.000009550080272926955",
            "extra": "mean: 37.07587189238907 usec\nrounds: 10780"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 20775.606032782718,
            "unit": "iter/sec",
            "range": "stddev: 0.00018209299164392834",
            "extra": "mean: 48.13337326584155 usec\nrounds: 10668"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 16570.4946701724,
            "unit": "iter/sec",
            "range": "stddev: 0.000010138493003795536",
            "extra": "mean: 60.34822857763219 usec\nrounds: 9126"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 774.6708941440995,
            "unit": "iter/sec",
            "range": "stddev: 0.0000594283156081643",
            "extra": "mean: 1.2908707524178469 msec\nrounds: 517"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1762571852228,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24798.190634341652,
            "unit": "iter/sec",
            "range": "stddev: 0.000019363025907589876",
            "extra": "mean: 40.32552272645066 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3539.1266287249277,
            "unit": "iter/sec",
            "range": "stddev: 0.00032939983621133316",
            "extra": "mean: 282.5555864216926 usec\nrounds: 3211"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2069.1364895428633,
            "unit": "iter/sec",
            "range": "stddev: 0.00055744754830226",
            "extra": "mean: 483.29339560433306 usec\nrounds: 1547"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8184.9358983442025,
            "unit": "iter/sec",
            "range": "stddev: 0.000008124471496742572",
            "extra": "mean: 122.17566666616146 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5861.231825753516,
            "unit": "iter/sec",
            "range": "stddev: 0.00002786592373304435",
            "extra": "mean: 170.6125998303165 usec\nrounds: 3536"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 32436.32536805371,
            "unit": "iter/sec",
            "range": "stddev: 0.00000799005607295624",
            "extra": "mean: 30.829632785250467 usec\nrounds: 12347"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13733.190905244901,
            "unit": "iter/sec",
            "range": "stddev: 0.000011031928820363935",
            "extra": "mean: 72.81628915666538 usec\nrounds: 5976"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3840.963337430419,
            "unit": "iter/sec",
            "range": "stddev: 0.00001573962758123527",
            "extra": "mean: 260.35135255130916 usec\nrounds: 3018"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2032.5321950563416,
            "unit": "iter/sec",
            "range": "stddev: 0.000017642895289344205",
            "extra": "mean: 491.9971267526614 usec\nrounds: 1783"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1049.2948719787935,
            "unit": "iter/sec",
            "range": "stddev: 0.00002192140221558974",
            "extra": "mean: 953.0209540757293 usec\nrounds: 871"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34521.15822634135,
            "unit": "iter/sec",
            "range": "stddev: 0.000010224014201891718",
            "extra": "mean: 28.96774185394946 usec\nrounds: 15437"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25107.206761288497,
            "unit": "iter/sec",
            "range": "stddev: 0.000010192928610026175",
            "extra": "mean: 39.82920161162047 usec\nrounds: 12782"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18570.930800663904,
            "unit": "iter/sec",
            "range": "stddev: 0.0002632352931274118",
            "extra": "mean: 53.84759712551674 usec\nrounds: 11063"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15832.427791100637,
            "unit": "iter/sec",
            "range": "stddev: 0.000010881935003523742",
            "extra": "mean: 63.16150707866151 usec\nrounds: 8900"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 667.314460953767,
            "unit": "iter/sec",
            "range": "stddev: 0.00006338360547224705",
            "extra": "mean: 1.498543877755531 msec\nrounds: 499"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1762658557559,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25201.69758658444,
            "unit": "iter/sec",
            "range": "stddev: 0.000018980091857835345",
            "extra": "mean: 39.679866666296626 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3455.4071378267117,
            "unit": "iter/sec",
            "range": "stddev: 0.00039387144126838637",
            "extra": "mean: 289.4014974539159 usec\nrounds: 2553"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2049.2994697118297,
            "unit": "iter/sec",
            "range": "stddev: 0.0004978770578594599",
            "extra": "mean: 487.971628734486 usec\nrounds: 1573"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7977.8237773051,
            "unit": "iter/sec",
            "range": "stddev: 0.000011082745770765833",
            "extra": "mean: 125.3474666668808 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5955.394893766035,
            "unit": "iter/sec",
            "range": "stddev: 0.000012546608527253906",
            "extra": "mean: 167.91497756878826 usec\nrounds: 3611"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31960.390253800982,
            "unit": "iter/sec",
            "range": "stddev: 0.000007683850567820475",
            "extra": "mean: 31.288729332116716 usec\nrounds: 14346"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13686.88465602649,
            "unit": "iter/sec",
            "range": "stddev: 0.000011852246353803122",
            "extra": "mean: 73.06264538144468 usec\nrounds: 7047"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3788.8556033798545,
            "unit": "iter/sec",
            "range": "stddev: 0.000013623299818147787",
            "extra": "mean: 263.931937418768 usec\nrounds: 3068"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1973.2502539893867,
            "unit": "iter/sec",
            "range": "stddev: 0.000026667777104206668",
            "extra": "mean: 506.77809263080854 usec\nrounds: 1479"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1012.5844993404222,
            "unit": "iter/sec",
            "range": "stddev: 0.000025693805571189856",
            "extra": "mean: 987.5719020500319 usec\nrounds: 878"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34267.28562813771,
            "unit": "iter/sec",
            "range": "stddev: 0.000010547618685540696",
            "extra": "mean: 29.182352254328407 usec\nrounds: 14305"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24965.437642191046,
            "unit": "iter/sec",
            "range": "stddev: 0.000010907435623816146",
            "extra": "mean: 40.05537632995553 usec\nrounds: 12970"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19354.04513732556,
            "unit": "iter/sec",
            "range": "stddev: 0.00018717075901192995",
            "extra": "mean: 51.668785150833074 usec\nrounds: 11664"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15528.272524386883,
            "unit": "iter/sec",
            "range": "stddev: 0.000013032674579570084",
            "extra": "mean: 64.39866369098799 usec\nrounds: 9521"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 678.9297021912114,
            "unit": "iter/sec",
            "range": "stddev: 0.00005709347008514702",
            "extra": "mean: 1.4729065421243914 msec\nrounds: 546"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1762745223484,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25668.50776456735,
            "unit": "iter/sec",
            "range": "stddev: 0.000018002807731006542",
            "extra": "mean: 38.95824444381585 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3593.0291941895916,
            "unit": "iter/sec",
            "range": "stddev: 0.00029478226337494387",
            "extra": "mean: 278.3166921151472 usec\nrounds: 3196"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2071.732723337444,
            "unit": "iter/sec",
            "range": "stddev: 0.0005345615273903302",
            "extra": "mean: 482.6877467036659 usec\nrounds: 1441"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8023.325411643269,
            "unit": "iter/sec",
            "range": "stddev: 0.000011240292753574255",
            "extra": "mean: 124.6365999998981 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6031.822484035664,
            "unit": "iter/sec",
            "range": "stddev: 0.000028625032589857446",
            "extra": "mean: 165.78737233177623 usec\nrounds: 3701"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 32099.994425307184,
            "unit": "iter/sec",
            "range": "stddev: 0.000007773018981512629",
            "extra": "mean: 31.15265338524838 usec\nrounds: 13352"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13838.526451249003,
            "unit": "iter/sec",
            "range": "stddev: 0.000010423917177070511",
            "extra": "mean: 72.26202901897437 usec\nrounds: 8684"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3651.3379943415207,
            "unit": "iter/sec",
            "range": "stddev: 0.00005846472238548998",
            "extra": "mean: 273.87220836572794 usec\nrounds: 2582"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2006.7111730345475,
            "unit": "iter/sec",
            "range": "stddev: 0.00006771457162198957",
            "extra": "mean: 498.32781789309547 usec\nrounds: 1889"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1047.0839724942718,
            "unit": "iter/sec",
            "range": "stddev: 0.000028089976417567878",
            "extra": "mean: 955.0332411429118 usec\nrounds: 875"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34972.945108888634,
            "unit": "iter/sec",
            "range": "stddev: 0.00001025825343515339",
            "extra": "mean: 28.59353128215223 usec\nrounds: 12643"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25452.972172020647,
            "unit": "iter/sec",
            "range": "stddev: 0.000010369363433609977",
            "extra": "mean: 39.288142588677985 usec\nrounds: 13837"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19115.242130197916,
            "unit": "iter/sec",
            "range": "stddev: 0.00019121010580567244",
            "extra": "mean: 52.314273247955256 usec\nrounds: 11872"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15926.297805716486,
            "unit": "iter/sec",
            "range": "stddev: 0.000010454008966977717",
            "extra": "mean: 62.78923150872303 usec\nrounds: 10194"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 695.0612968478852,
            "unit": "iter/sec",
            "range": "stddev: 0.00005404305231810623",
            "extra": "mean: 1.4387220300353611 msec\nrounds: 566"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1762831411987,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 23192.096976764602,
            "unit": "iter/sec",
            "range": "stddev: 0.000025542506826587318",
            "extra": "mean: 43.11813636351499 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3523.8990999730263,
            "unit": "iter/sec",
            "range": "stddev: 0.00045534693828406077",
            "extra": "mean: 283.77657010884747 usec\nrounds: 3031"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2071.007574228135,
            "unit": "iter/sec",
            "range": "stddev: 0.0005654714140781079",
            "extra": "mean: 482.8567565102702 usec\nrounds: 1536"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8063.458342026067,
            "unit": "iter/sec",
            "range": "stddev: 0.00000776261522543084",
            "extra": "mean: 124.0162666666341 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6022.00969763751,
            "unit": "iter/sec",
            "range": "stddev: 0.00001723706402603916",
            "extra": "mean: 166.05752069650592 usec\nrounds: 3503"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 32178.265049661604,
            "unit": "iter/sec",
            "range": "stddev: 0.000007633415218570828",
            "extra": "mean: 31.076877465477786 usec\nrounds: 14551"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13888.52174122415,
            "unit": "iter/sec",
            "range": "stddev: 0.000010735714524541674",
            "extra": "mean: 72.0019033438082 usec\nrounds: 7656"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3891.312368398522,
            "unit": "iter/sec",
            "range": "stddev: 0.000013720265099146061",
            "extra": "mean: 256.9827105428579 usec\nrounds: 3168"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2032.4005746540347,
            "unit": "iter/sec",
            "range": "stddev: 0.000017934416767441892",
            "extra": "mean: 492.02898900489873 usec\nrounds: 1819"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1050.5339978223726,
            "unit": "iter/sec",
            "range": "stddev: 0.00003054613504523193",
            "extra": "mean: 951.8968468158829 usec\nrounds: 581"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34754.409998649746,
            "unit": "iter/sec",
            "range": "stddev: 0.000010257997541996011",
            "extra": "mean: 28.77332689689888 usec\nrounds: 15433"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25188.992455825566,
            "unit": "iter/sec",
            "range": "stddev: 0.000010299337259390216",
            "extra": "mean: 39.69988088065531 usec\nrounds: 10628"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 20633.15645120557,
            "unit": "iter/sec",
            "range": "stddev: 0.00001069506370122895",
            "extra": "mean: 48.46568203778493 usec\nrounds: 11797"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15776.811798525978,
            "unit": "iter/sec",
            "range": "stddev: 0.000011913904217603888",
            "extra": "mean: 63.38416232444566 usec\nrounds: 9327"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 612.4878941122931,
            "unit": "iter/sec",
            "range": "stddev: 0.0009453343525139054",
            "extra": "mean: 1.6326853307841227 msec\nrounds: 523"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1762917746353,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25697.985849382294,
            "unit": "iter/sec",
            "range": "stddev: 0.000018437621446841293",
            "extra": "mean: 38.913555554940004 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3553.356784214418,
            "unit": "iter/sec",
            "range": "stddev: 0.0003495138049536408",
            "extra": "mean: 281.4240338719833 usec\nrounds: 3218"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2110.304338094949,
            "unit": "iter/sec",
            "range": "stddev: 0.0004757217750829337",
            "extra": "mean: 473.865300823263 usec\nrounds: 1579"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8028.745048360368,
            "unit": "iter/sec",
            "range": "stddev: 0.00001086704113032077",
            "extra": "mean: 124.5524666652879 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6076.3252212688585,
            "unit": "iter/sec",
            "range": "stddev: 0.000012575097897563808",
            "extra": "mean: 164.5731529477252 usec\nrounds: 3596"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 32363.85362466614,
            "unit": "iter/sec",
            "range": "stddev: 0.00000778436736952098",
            "extra": "mean: 30.898668977968963 usec\nrounds: 14422"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13818.669629496164,
            "unit": "iter/sec",
            "range": "stddev: 0.00001070606629681431",
            "extra": "mean: 72.36586638307675 usec\nrounds: 7993"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3870.188504468047,
            "unit": "iter/sec",
            "range": "stddev: 0.000014420483752999038",
            "extra": "mean: 258.38534708206646 usec\nrounds: 3273"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2035.8507635393946,
            "unit": "iter/sec",
            "range": "stddev: 0.000015967146433695696",
            "extra": "mean: 491.19513959926337 usec\nrounds: 1798"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1048.214683639437,
            "unit": "iter/sec",
            "range": "stddev: 0.000023839764527143457",
            "extra": "mean: 954.0030449945293 usec\nrounds: 889"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34943.43433235327,
            "unit": "iter/sec",
            "range": "stddev: 0.000010196654719402185",
            "extra": "mean: 28.6176793754392 usec\nrounds: 15370"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25640.153066283423,
            "unit": "iter/sec",
            "range": "stddev: 0.000010382362549335024",
            "extra": "mean: 39.00132723134915 usec\nrounds: 13165"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19660.625546737832,
            "unit": "iter/sec",
            "range": "stddev: 0.00020257243487994522",
            "extra": "mean: 50.863081524174795 usec\nrounds: 11469"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15714.745379392185,
            "unit": "iter/sec",
            "range": "stddev: 0.000010968743038089782",
            "extra": "mean: 63.63450223707526 usec\nrounds: 4470"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 628.6186450647695,
            "unit": "iter/sec",
            "range": "stddev: 0.00026034870094168163",
            "extra": "mean: 1.5907895953308313 msec\nrounds: 514"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1763004236501,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 26617.840862595454,
            "unit": "iter/sec",
            "range": "stddev: 0.00001575241671049463",
            "extra": "mean: 37.568787234175836 usec\nrounds: 47"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3514.607593057067,
            "unit": "iter/sec",
            "range": "stddev: 0.00027122833106608664",
            "extra": "mean: 284.5267852876237 usec\nrounds: 3181"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2025.308205391723,
            "unit": "iter/sec",
            "range": "stddev: 0.0004150356427029973",
            "extra": "mean: 493.7520113421878 usec\nrounds: 1058"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8096.825072962854,
            "unit": "iter/sec",
            "range": "stddev: 0.00001004663025206773",
            "extra": "mean: 123.50519999984044 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5960.018579094598,
            "unit": "iter/sec",
            "range": "stddev: 0.000019545293189394844",
            "extra": "mean: 167.78471186442385 usec\nrounds: 3717"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31216.510153397816,
            "unit": "iter/sec",
            "range": "stddev: 0.000007673449969983643",
            "extra": "mean: 32.0343303939487 usec\nrounds: 13835"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13644.795842041536,
            "unit": "iter/sec",
            "range": "stddev: 0.00001124758009275323",
            "extra": "mean: 73.28801482825116 usec\nrounds: 9374"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3850.441029724126,
            "unit": "iter/sec",
            "range": "stddev: 0.000018862192842815335",
            "extra": "mean: 259.7105090768388 usec\nrounds: 2589"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2035.867534097413,
            "unit": "iter/sec",
            "range": "stddev: 0.000016210252820176834",
            "extra": "mean: 491.1910933553654 usec\nrounds: 1821"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1039.4425060389458,
            "unit": "iter/sec",
            "range": "stddev: 0.00003054614554639049",
            "extra": "mean: 962.0541724917031 usec\nrounds: 887"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33808.23973255478,
            "unit": "iter/sec",
            "range": "stddev: 0.00001038168693770833",
            "extra": "mean: 29.57858817586044 usec\nrounds: 16830"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24556.35004597017,
            "unit": "iter/sec",
            "range": "stddev: 0.00001018465370568246",
            "extra": "mean: 40.722664326252556 usec\nrounds: 14100"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19237.2461128811,
            "unit": "iter/sec",
            "range": "stddev: 0.0001452339606051154",
            "extra": "mean: 51.98249240728943 usec\nrounds: 12512"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15505.679827130103,
            "unit": "iter/sec",
            "range": "stddev: 0.000011294960257893203",
            "extra": "mean: 64.49249637222044 usec\nrounds: 8683"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 657.5043722652574,
            "unit": "iter/sec",
            "range": "stddev: 0.000089051034571229",
            "extra": "mean: 1.5209024337811845 msec\nrounds: 521"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1763090578965,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25212.28746052481,
            "unit": "iter/sec",
            "range": "stddev: 0.000016804655578658028",
            "extra": "mean: 39.663199999829935 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3598.0185612148102,
            "unit": "iter/sec",
            "range": "stddev: 0.0002806885761370147",
            "extra": "mean: 277.93075076921417 usec\nrounds: 3250"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2027.270844825581,
            "unit": "iter/sec",
            "range": "stddev: 0.0004378272844661201",
            "extra": "mean: 493.27400063607996 usec\nrounds: 1572"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8101.211131017973,
            "unit": "iter/sec",
            "range": "stddev: 0.000007036738843714846",
            "extra": "mean: 123.43833333403609 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6036.879632882101,
            "unit": "iter/sec",
            "range": "stddev: 0.000011467163212191567",
            "extra": "mean: 165.6484907456378 usec\nrounds: 3782"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31331.004901343164,
            "unit": "iter/sec",
            "range": "stddev: 0.000007406660720887745",
            "extra": "mean: 31.91726544197534 usec\nrounds: 15623"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13587.221907819738,
            "unit": "iter/sec",
            "range": "stddev: 0.000010703142629819507",
            "extra": "mean: 73.59856244229577 usec\nrounds: 8664"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3872.462234210265,
            "unit": "iter/sec",
            "range": "stddev: 0.000014572869971854378",
            "extra": "mean: 258.2336352219936 usec\nrounds: 3424"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2043.0389913856077,
            "unit": "iter/sec",
            "range": "stddev: 0.00001563096566617752",
            "extra": "mean: 489.46691875018547 usec\nrounds: 1600"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 997.4331833536181,
            "unit": "iter/sec",
            "range": "stddev: 0.00018850452767254952",
            "extra": "mean: 1.0025734221491927 msec\nrounds: 912"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 29269.315791936966,
            "unit": "iter/sec",
            "range": "stddev: 0.000015512476726646833",
            "extra": "mean: 34.165472370743885 usec\nrounds: 16830"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24357.314057545995,
            "unit": "iter/sec",
            "range": "stddev: 0.000012506973889142232",
            "extra": "mean: 41.055429906492336 usec\nrounds: 10058"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19309.932727201678,
            "unit": "iter/sec",
            "range": "stddev: 0.00015887575264293363",
            "extra": "mean: 51.78681946371111 usec\nrounds: 12269"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15488.512757354632,
            "unit": "iter/sec",
            "range": "stddev: 0.000010481438029008888",
            "extra": "mean: 64.56397819894978 usec\nrounds: 10183"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 683.3090021350857,
            "unit": "iter/sec",
            "range": "stddev: 0.0000528717231898997",
            "extra": "mean: 1.4634667432675013 msec\nrounds: 557"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1763176805624,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25398.965800324415,
            "unit": "iter/sec",
            "range": "stddev: 0.000021098673461511642",
            "extra": "mean: 39.37168181813242 usec\nrounds: 44"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3515.0844135297148,
            "unit": "iter/sec",
            "range": "stddev: 0.0005007154949598977",
            "extra": "mean: 284.48818928813085 usec\nrounds: 3006"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2081.709794194438,
            "unit": "iter/sec",
            "range": "stddev: 0.000620896073106933",
            "extra": "mean: 480.37435515211735 usec\nrounds: 1543"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8201.153519588208,
            "unit": "iter/sec",
            "range": "stddev: 0.000010833662219107825",
            "extra": "mean: 121.93406666654028 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6042.863005702237,
            "unit": "iter/sec",
            "range": "stddev: 0.000012383718250431888",
            "extra": "mean: 165.4844730149216 usec\nrounds: 3539"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31958.68978405227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075086556195787165",
            "extra": "mean: 31.2903941543627 usec\nrounds: 14096"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13813.112853089002,
            "unit": "iter/sec",
            "range": "stddev: 0.000010810076774020685",
            "extra": "mean: 72.39497791957673 usec\nrounds: 5797"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3867.1381927822335,
            "unit": "iter/sec",
            "range": "stddev: 0.000013645697895048654",
            "extra": "mean: 258.58915563618496 usec\nrounds: 3309"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2019.5844514643177,
            "unit": "iter/sec",
            "range": "stddev: 0.00001609074090907485",
            "extra": "mean: 495.1513660520317 usec\nrounds: 1844"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1033.0679995888747,
            "unit": "iter/sec",
            "range": "stddev: 0.00003454477234829285",
            "extra": "mean: 967.9904908466483 usec\nrounds: 874"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33878.76394413125,
            "unit": "iter/sec",
            "range": "stddev: 0.000010371708031627549",
            "extra": "mean: 29.517015486429166 usec\nrounds: 15110"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24829.840766722573,
            "unit": "iter/sec",
            "range": "stddev: 0.000010251586360473036",
            "extra": "mean: 40.27412053887269 usec\nrounds: 12693"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19133.861592933208,
            "unit": "iter/sec",
            "range": "stddev: 0.00023157262150698995",
            "extra": "mean: 52.26336540290091 usec\nrounds: 11579"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15440.336187843657,
            "unit": "iter/sec",
            "range": "stddev: 0.000012090070863148582",
            "extra": "mean: 64.76542918717733 usec\nrounds: 9744"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 632.0825168968709,
            "unit": "iter/sec",
            "range": "stddev: 0.00008795297136465341",
            "extra": "mean: 1.582071918251075 msec\nrounds: 526"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1763263567453,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25862.425688582684,
            "unit": "iter/sec",
            "range": "stddev: 0.000017407111459656918",
            "extra": "mean: 38.66613333340435 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3542.5866495258447,
            "unit": "iter/sec",
            "range": "stddev: 0.00041636816176956754",
            "extra": "mean: 282.279616261142 usec\nrounds: 3247"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2060.360798597958,
            "unit": "iter/sec",
            "range": "stddev: 0.00047816253715776637",
            "extra": "mean: 485.3518862718043 usec\nrounds: 1486"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8034.7960233359245,
            "unit": "iter/sec",
            "range": "stddev: 0.000008260361378543525",
            "extra": "mean: 124.45866666629021 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6005.445696741189,
            "unit": "iter/sec",
            "range": "stddev: 0.000013225706288179525",
            "extra": "mean: 166.51553448275166 usec\nrounds: 3770"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30422.294774846483,
            "unit": "iter/sec",
            "range": "stddev: 0.000007644228666623995",
            "extra": "mean: 32.87063015465921 usec\nrounds: 14744"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13487.364597908896,
            "unit": "iter/sec",
            "range": "stddev: 0.000011713572854159162",
            "extra": "mean: 74.14346907734975 usec\nrounds: 8020"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3839.8856861558256,
            "unit": "iter/sec",
            "range": "stddev: 0.000018080949803325612",
            "extra": "mean: 260.42441930116854 usec\nrounds: 3005"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2038.3174484242372,
            "unit": "iter/sec",
            "range": "stddev: 0.000019860348693835375",
            "extra": "mean: 490.6007161804313 usec\nrounds: 1508"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1043.8727562665936,
            "unit": "iter/sec",
            "range": "stddev: 0.00002644207893837157",
            "extra": "mean: 957.9711645857066 usec\nrounds: 881"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33864.04824111127,
            "unit": "iter/sec",
            "range": "stddev: 0.000010080730671404352",
            "extra": "mean: 29.529842175986232 usec\nrounds: 15625"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24895.774295695235,
            "unit": "iter/sec",
            "range": "stddev: 0.000010141689510189477",
            "extra": "mean: 40.16745926929903 usec\nrounds: 13221"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19717.563733543055,
            "unit": "iter/sec",
            "range": "stddev: 0.000010492386200049543",
            "extra": "mean: 50.71620477629412 usec\nrounds: 10636"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 14988.048646207646,
            "unit": "iter/sec",
            "range": "stddev: 0.00022403462229872155",
            "extra": "mean: 66.71982614981872 usec\nrounds: 10371"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 671.0184386004903,
            "unit": "iter/sec",
            "range": "stddev: 0.00006542924822080943",
            "extra": "mean: 1.4902720141128314 msec\nrounds: 496"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1763349913727,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25529.983023678316,
            "unit": "iter/sec",
            "range": "stddev: 0.00001928396676092576",
            "extra": "mean: 39.169630433068804 usec\nrounds: 46"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3551.782714741379,
            "unit": "iter/sec",
            "range": "stddev: 0.00033741243676806886",
            "extra": "mean: 281.54875461541695 usec\nrounds: 2979"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2087.6188093741957,
            "unit": "iter/sec",
            "range": "stddev: 0.00031925926527680195",
            "extra": "mean: 479.01465320662123 usec\nrounds: 1684"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8185.440611223503,
            "unit": "iter/sec",
            "range": "stddev: 0.000009617155502296128",
            "extra": "mean: 122.16813333528384 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6047.344711939678,
            "unit": "iter/sec",
            "range": "stddev: 0.000012129738740137707",
            "extra": "mean: 165.3618319500843 usec\nrounds: 3493"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31804.904794546357,
            "unit": "iter/sec",
            "range": "stddev: 0.0000077366780959242",
            "extra": "mean: 31.44169135106079 usec\nrounds: 16164"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13691.854336316375,
            "unit": "iter/sec",
            "range": "stddev: 0.000012406626424954924",
            "extra": "mean: 73.03612611095288 usec\nrounds: 8889"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3840.5869384712587,
            "unit": "iter/sec",
            "range": "stddev: 0.000018458270610410696",
            "extra": "mean: 260.37686843721053 usec\nrounds: 3162"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2029.2638543370085,
            "unit": "iter/sec",
            "range": "stddev: 0.000024299336625414608",
            "extra": "mean: 492.78953935081813 usec\nrounds: 1817"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1036.7543653382781,
            "unit": "iter/sec",
            "range": "stddev: 0.00003352703165753927",
            "extra": "mean: 964.5486273633527 usec\nrounds: 899"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33617.09747513688,
            "unit": "iter/sec",
            "range": "stddev: 0.000010686124843209252",
            "extra": "mean: 29.746768017066245 usec\nrounds: 16984"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24223.71901138641,
            "unit": "iter/sec",
            "range": "stddev: 0.00016109072949203835",
            "extra": "mean: 41.2818526969351 usec\nrounds: 14331"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 20164.339421046894,
            "unit": "iter/sec",
            "range": "stddev: 0.000010523892529739298",
            "extra": "mean: 49.59249986420244 usec\nrounds: 11055"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15595.363817638001,
            "unit": "iter/sec",
            "range": "stddev: 0.0000110039482393078",
            "extra": "mean: 64.1216204824297 usec\nrounds: 10653"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 669.166252846418,
            "unit": "iter/sec",
            "range": "stddev: 0.00005932193957072561",
            "extra": "mean: 1.4943969390959595 msec\nrounds: 509"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1763436157951,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25011.85283895574,
            "unit": "iter/sec",
            "range": "stddev: 0.000021287266230059114",
            "extra": "mean: 39.981044444756556 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3524.8135026842815,
            "unit": "iter/sec",
            "range": "stddev: 0.00041769486009555275",
            "extra": "mean: 283.7029531458789 usec\nrounds: 2988"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2039.104802335586,
            "unit": "iter/sec",
            "range": "stddev: 0.0005326470748744968",
            "extra": "mean: 490.4112818794807 usec\nrounds: 1490"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7972.892166588436,
            "unit": "iter/sec",
            "range": "stddev: 0.00000759996774746178",
            "extra": "mean: 125.42500000070807 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5950.759008752916,
            "unit": "iter/sec",
            "range": "stddev: 0.000013218034829641486",
            "extra": "mean: 168.04579021417425 usec\nrounds: 3413"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30769.624378607907,
            "unit": "iter/sec",
            "range": "stddev: 0.000008125100379156321",
            "extra": "mean: 32.49958425541373 usec\nrounds: 14100"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13558.499817605696,
            "unit": "iter/sec",
            "range": "stddev: 0.0000110679455567279",
            "extra": "mean: 73.75447235700082 usec\nrounds: 7416"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3858.5643895785915,
            "unit": "iter/sec",
            "range": "stddev: 0.00001439739324305693",
            "extra": "mean: 259.16374564095685 usec\nrounds: 2925"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2008.890214057252,
            "unit": "iter/sec",
            "range": "stddev: 0.00002608283448291428",
            "extra": "mean: 497.787282252897 usec\nrounds: 1775"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1033.750898090924,
            "unit": "iter/sec",
            "range": "stddev: 0.000026523314585034556",
            "extra": "mean: 967.3510338387582 usec\nrounds: 857"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33276.370515950766,
            "unit": "iter/sec",
            "range": "stddev: 0.000011604811998654497",
            "extra": "mean: 30.05135429420279 usec\nrounds: 15521"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24629.712146770704,
            "unit": "iter/sec",
            "range": "stddev: 0.000010638049453258487",
            "extra": "mean: 40.60136773182361 usec\nrounds: 10921"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18993.42826257705,
            "unit": "iter/sec",
            "range": "stddev: 0.00018930732917555617",
            "extra": "mean: 52.649789504842076 usec\nrounds: 11853"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15382.314023339526,
            "unit": "iter/sec",
            "range": "stddev: 0.000011484687357013894",
            "extra": "mean: 65.00972470609453 usec\nrounds: 10625"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 620.0489576080901,
            "unit": "iter/sec",
            "range": "stddev: 0.00010711557447353106",
            "extra": "mean: 1.612775874759333 msec\nrounds: 519"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1763522544749,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 29029.889401405366,
            "unit": "iter/sec",
            "range": "stddev: 0.000014008474967601887",
            "extra": "mean: 34.447254902445096 usec\nrounds: 51"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3723.7439089970057,
            "unit": "iter/sec",
            "range": "stddev: 0.000287065695265051",
            "extra": "mean: 268.54693137835864 usec\nrounds: 3410"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2160.8085394409773,
            "unit": "iter/sec",
            "range": "stddev: 0.0003046436978115818",
            "extra": "mean: 462.78972974565806 usec\nrounds: 1691"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8296.294985277293,
            "unit": "iter/sec",
            "range": "stddev: 0.000007478615748955675",
            "extra": "mean: 120.53573333332679 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 6094.949097165535,
            "unit": "iter/sec",
            "range": "stddev: 0.000014341064008741528",
            "extra": "mean: 164.07027918658935 usec\nrounds: 3983"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 32682.089854789992,
            "unit": "iter/sec",
            "range": "stddev: 0.000007261600640258185",
            "extra": "mean: 30.597798501965652 usec\nrounds: 17623"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 14150.02496386765,
            "unit": "iter/sec",
            "range": "stddev: 0.00001032008957843796",
            "extra": "mean: 70.67125341146169 usec\nrounds: 9380"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3946.4327770852774,
            "unit": "iter/sec",
            "range": "stddev: 0.000015797943929956525",
            "extra": "mean: 253.393395120383 usec\nrounds: 3156"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2026.9290576394906,
            "unit": "iter/sec",
            "range": "stddev: 0.00006318705244022545",
            "extra": "mean: 493.35717805761504 usec\nrounds: 1668"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1058.371116391698,
            "unit": "iter/sec",
            "range": "stddev: 0.00004049286758516616",
            "extra": "mean: 944.848158186041 usec\nrounds: 904"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 35864.09540491874,
            "unit": "iter/sec",
            "range": "stddev: 0.000009973255740758537",
            "extra": "mean: 27.88303981209158 usec\nrounds: 16603"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 25111.97309702407,
            "unit": "iter/sec",
            "range": "stddev: 0.0001484606935958418",
            "extra": "mean: 39.821641897127805 usec\nrounds: 14211"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 20728.767369235225,
            "unit": "iter/sec",
            "range": "stddev: 0.000010162219528692813",
            "extra": "mean: 48.24213529860721 usec\nrounds: 13060"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15931.057925890354,
            "unit": "iter/sec",
            "range": "stddev: 0.000010571864386732092",
            "extra": "mean: 62.77047040139439 usec\nrounds: 10389"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 727.7845785742473,
            "unit": "iter/sec",
            "range": "stddev: 0.00007149485435077494",
            "extra": "mean: 1.3740329617302844 msec\nrounds: 601"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1763608893320,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25941.025097389567,
            "unit": "iter/sec",
            "range": "stddev: 0.00001867378030269612",
            "extra": "mean: 38.54897777731341 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3561.7058942956037,
            "unit": "iter/sec",
            "range": "stddev: 0.0002953627272019893",
            "extra": "mean: 280.7643386843341 usec\nrounds: 3177"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2081.259475730222,
            "unit": "iter/sec",
            "range": "stddev: 0.00045154550672287604",
            "extra": "mean: 480.4782929092222 usec\nrounds: 1509"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8132.029461729406,
            "unit": "iter/sec",
            "range": "stddev: 0.000010515096223440403",
            "extra": "mean: 122.97053333440999 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5947.628153064135,
            "unit": "iter/sec",
            "range": "stddev: 0.00001372868149178498",
            "extra": "mean: 168.1342502027155 usec\nrounds: 3701"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31703.694558420837,
            "unit": "iter/sec",
            "range": "stddev: 0.000007603930408108806",
            "extra": "mean: 31.54206517342281 usec\nrounds: 14331"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13513.454861866636,
            "unit": "iter/sec",
            "range": "stddev: 0.000010878556457182778",
            "extra": "mean: 74.00032117781227 usec\nrounds: 8830"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3848.269118728088,
            "unit": "iter/sec",
            "range": "stddev: 0.000015043231348309638",
            "extra": "mean: 259.85708617242324 usec\nrounds: 2495"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1885.84923306335,
            "unit": "iter/sec",
            "range": "stddev: 0.00010533565049723279",
            "extra": "mean: 530.265082949188 usec\nrounds: 1736"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1032.7773354857206,
            "unit": "iter/sec",
            "range": "stddev: 0.000038273284361070326",
            "extra": "mean: 968.2629213873043 usec\nrounds: 865"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 34669.95704590321,
            "unit": "iter/sec",
            "range": "stddev: 0.000009719512292353783",
            "extra": "mean: 28.843416179489193 usec\nrounds: 15736"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 24978.76894560651,
            "unit": "iter/sec",
            "range": "stddev: 0.00001017457556785261",
            "extra": "mean: 40.033998560040686 usec\nrounds: 9028"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 20062.698531452974,
            "unit": "iter/sec",
            "range": "stddev: 0.000010631846707697824",
            "extra": "mean: 49.84374352394649 usec\nrounds: 11311"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 14945.052226970092,
            "unit": "iter/sec",
            "range": "stddev: 0.0001753408595708878",
            "extra": "mean: 66.91177687525128 usec\nrounds: 9972"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 660.5668283061121,
            "unit": "iter/sec",
            "range": "stddev: 0.00012824357307835314",
            "extra": "mean: 1.5138513730159513 msec\nrounds: 504"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1763695322547,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 26200.14113139621,
            "unit": "iter/sec",
            "range": "stddev: 0.000017360105641690437",
            "extra": "mean: 38.16773333337803 usec\nrounds: 45"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3533.3068882216494,
            "unit": "iter/sec",
            "range": "stddev: 0.0003515613237333089",
            "extra": "mean: 283.02098618535524 usec\nrounds: 3185"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2025.10526989605,
            "unit": "iter/sec",
            "range": "stddev: 0.0005482003666800034",
            "extra": "mean: 493.801490157265 usec\nrounds: 1524"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8103.294313365275,
            "unit": "iter/sec",
            "range": "stddev: 0.000006123061384546384",
            "extra": "mean: 123.40659999855082 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5925.9890265746835,
            "unit": "iter/sec",
            "range": "stddev: 0.000012936496829653576",
            "extra": "mean: 168.74820312956535 usec\nrounds: 3515"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30577.69782536155,
            "unit": "iter/sec",
            "range": "stddev: 0.000007834303528612502",
            "extra": "mean: 32.70357388287704 usec\nrounds: 14435"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13519.508998061885,
            "unit": "iter/sec",
            "range": "stddev: 0.000010749788833155824",
            "extra": "mean: 73.96718328626852 usec\nrounds: 8484"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3678.045521921638,
            "unit": "iter/sec",
            "range": "stddev: 0.00004684419208816775",
            "extra": "mean: 271.8835299997968 usec\nrounds: 3200"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2026.7638518184822,
            "unit": "iter/sec",
            "range": "stddev: 0.000016577564975560958",
            "extra": "mean: 493.3973926477748 usec\nrounds: 1877"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1042.024029302589,
            "unit": "iter/sec",
            "range": "stddev: 0.000029389582279452515",
            "extra": "mean: 959.6707675438971 usec\nrounds: 912"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33282.07004002904,
            "unit": "iter/sec",
            "range": "stddev: 0.000010133093290440574",
            "extra": "mean: 30.046208027243477 usec\nrounds: 16469"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23037.59571520574,
            "unit": "iter/sec",
            "range": "stddev: 0.00017968010986933768",
            "extra": "mean: 43.40730744484589 usec\nrounds: 13674"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19447.519745832644,
            "unit": "iter/sec",
            "range": "stddev: 0.000010621591469070147",
            "extra": "mean: 51.42043885644015 usec\nrounds: 11473"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15368.638837487892,
            "unit": "iter/sec",
            "range": "stddev: 0.000011048079766328882",
            "extra": "mean: 65.06757108253166 usec\nrounds: 9081"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 685.9655431372173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000935184180274627",
            "extra": "mean: 1.4577991708250637 msec\nrounds: 521"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1763781527566,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 25752.216650926606,
            "unit": "iter/sec",
            "range": "stddev: 0.00001616617436041783",
            "extra": "mean: 38.8316086943148 usec\nrounds: 46"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3547.175949852106,
            "unit": "iter/sec",
            "range": "stddev: 0.0002958206368958363",
            "extra": "mean: 281.9144057519034 usec\nrounds: 3199"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 2008.708742213559,
            "unit": "iter/sec",
            "range": "stddev: 0.000499239270580607",
            "extra": "mean: 497.8322536188193 usec\nrounds: 1589"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 8047.184397452463,
            "unit": "iter/sec",
            "range": "stddev: 0.000007051315380692784",
            "extra": "mean: 124.26706666701648 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5950.59485667832,
            "unit": "iter/sec",
            "range": "stddev: 0.000013706866216557522",
            "extra": "mean: 168.0504258961111 usec\nrounds: 3738"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 30539.308359995426,
            "unit": "iter/sec",
            "range": "stddev: 0.000007727906023938385",
            "extra": "mean: 32.74468394018828 usec\nrounds: 13431"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13459.209481426922,
            "unit": "iter/sec",
            "range": "stddev: 0.000010745758187887217",
            "extra": "mean: 74.29856867745116 usec\nrounds: 8256"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3809.905743026999,
            "unit": "iter/sec",
            "range": "stddev: 0.000015549465848035656",
            "extra": "mean: 262.47368503281984 usec\nrounds: 2432"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 2024.9612960468398,
            "unit": "iter/sec",
            "range": "stddev: 0.000015563372865404056",
            "extra": "mean: 493.83659922400255 usec\nrounds: 1804"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1031.203280348845,
            "unit": "iter/sec",
            "range": "stddev: 0.000022013267961552125",
            "extra": "mean: 969.7409027458782 usec\nrounds: 874"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 32203.623678712454,
            "unit": "iter/sec",
            "range": "stddev: 0.000010182570070899569",
            "extra": "mean: 31.052406088729374 usec\nrounds: 15504"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23469.31056343714,
            "unit": "iter/sec",
            "range": "stddev: 0.000014612884714241942",
            "extra": "mean: 42.608835794175434 usec\nrounds: 12868"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 19152.92417735125,
            "unit": "iter/sec",
            "range": "stddev: 0.00019125972130551986",
            "extra": "mean: 52.211348551283976 usec\nrounds: 11631"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15129.696492875033,
            "unit": "iter/sec",
            "range": "stddev: 0.000012714428722332618",
            "extra": "mean: 66.09517913799037 usec\nrounds: 6241"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 669.4326652512079,
            "unit": "iter/sec",
            "range": "stddev: 0.00007141220537021137",
            "extra": "mean: 1.493802217770095 msec\nrounds: 574"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "949bbe1d65724924eb6b3e2422ddb3b843b1f29f",
          "message": "ci(deps): bump actions/download-artifact from 4 to 5 (#8)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T19:24:28Z",
          "url": "https://github.com/ArtnerC/cql-flow/commit/949bbe1d65724924eb6b3e2422ddb3b843b1f29f"
        },
        "date": 1763868643370,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_simple_library_conversion_speed",
            "value": 24216.690950791683,
            "unit": "iter/sec",
            "range": "stddev: 0.00002387970796108682",
            "extra": "mean: 41.293833333051154 usec\nrounds: 42"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_complex_library_conversion_speed",
            "value": 3361.0850209610317,
            "unit": "iter/sec",
            "range": "stddev: 0.0005781807217139841",
            "extra": "mean: 297.5229706370448 usec\nrounds: 1805"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_batch_conversion_performance",
            "value": 1901.6122610271705,
            "unit": "iter/sec",
            "range": "stddev: 0.0008989587388452722",
            "extra": "mean: 525.8695584239882 usec\nrounds: 1472"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_validation_performance_impact",
            "value": 7898.137198033888,
            "unit": "iter/sec",
            "range": "stddev: 0.000009882739356754161",
            "extra": "mean: 126.61213333302611 usec\nrounds: 5"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_type_inference_performance",
            "value": 5831.839524433048,
            "unit": "iter/sec",
            "range": "stddev: 0.00001540759982625826",
            "extra": "mean: 171.47248236348148 usec\nrounds: 3317"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestConversionPerformance::test_elm_generation_performance",
            "value": 31389.518629457838,
            "unit": "iter/sec",
            "range": "stddev: 0.000008856549269681924",
            "extra": "mean: 31.85776793217654 usec\nrounds: 14039"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[10]",
            "value": 13576.70807168253,
            "unit": "iter/sec",
            "range": "stddev: 0.000011037319376348762",
            "extra": "mean: 73.6555573501458 usec\nrounds: 7306"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[50]",
            "value": 3804.336868387831,
            "unit": "iter/sec",
            "range": "stddev: 0.000013887226207974833",
            "extra": "mean: 262.8578999692452 usec\nrounds: 3259"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[100]",
            "value": 1989.1203831169594,
            "unit": "iter/sec",
            "range": "stddev: 0.000023578102308186378",
            "extra": "mean: 502.734780905013 usec\nrounds: 1812"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_expression_scaling[200]",
            "value": 1010.6165507384752,
            "unit": "iter/sec",
            "range": "stddev: 0.000040986339763372646",
            "extra": "mean: 989.4949763778185 usec\nrounds: 889"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[1]",
            "value": 33028.04410544432,
            "unit": "iter/sec",
            "range": "stddev: 0.000010673130718943385",
            "extra": "mean: 30.277300006244108 usec\nrounds: 16053"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[3]",
            "value": 23930.209386406445,
            "unit": "iter/sec",
            "range": "stddev: 0.00001065601936133614",
            "extra": "mean: 41.788184292614254 usec\nrounds: 11867"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[5]",
            "value": 18025.9070695915,
            "unit": "iter/sec",
            "range": "stddev: 0.0002519120279406215",
            "extra": "mean: 55.475710383913665 usec\nrounds: 11460"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_nesting_complexity_scaling[8]",
            "value": 15088.001978030055,
            "unit": "iter/sec",
            "range": "stddev: 0.000013806783583221017",
            "extra": "mean: 66.27782800241677 usec\nrounds: 9692"
          },
          {
            "name": "tests/performance/test_benchmarks.py::TestScalabilityBenchmarks::test_concurrent_conversion_performance",
            "value": 626.9107099487056,
            "unit": "iter/sec",
            "range": "stddev: 0.0001342379167266084",
            "extra": "mean: 1.5951234906831002 msec\nrounds: 483"
          }
        ]
      }
    ]
  }
}
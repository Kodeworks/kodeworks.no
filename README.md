# Kodeworks.no
This is the project for [kodeworks.no](https://kodeworks.no).

## Contributing
The webpage is implemented using plain HTML, JavaScript and CSS. Clone the
project, open index.html in your browser and there you go.

Currently there exists both a master and a develop branch, and the workflow is:
* Commit to develop.
* Push to origin.
* Wait until changes are deployed to test.
* Verify changes
* Merge develop to master
* Push it!

## Hosting
The static files are hosted as a webpage in an S3 bucket named
**kodeworks-webpage**. This bucket is then used as an origin by a cloudfront
distribution which is located at [kodeworks.no](https://kodeworks.no).

There is also a bucket that is used for testing named **kodeworks-wepage-test**.
The cloudfront for this is found [here](https://d213a041t55sar.cloudfront.net).

Access policies for both the S3 and Cloudfront distributions are found in IAM
dashboard under policies. It is called **ReadAndEditKodeworksWebpage**.
## Deploy
Gitlab will automatically deploy and clear Cloudfront cache when you push to
**develop** (deploy to [test](https://d213a041t55sar.cloudfront.net)) or
**master** (deploy to [kodeworks.no](https://kodeworks.no)).
